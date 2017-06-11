var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var session = require('express-session');
var request = require('request');
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var api = express.Router();

// Initialize Passport and restore authentication state, if any, from the
// session.
api.use(passport.initialize());
api.use(passport.session());

api.use(bodyParser.json()); // support json encoded bodies
api.use(bodyParser.urlencoded({
  extended: true
}));

// how to get access token !!
// must loggin to my app id
// https://developers.facebook.com/tools/accesstoken/

var accessToken = null;
var profileParamList = "fields=id,photos.limit(4){link,name,id,comments.limit(0)},family,name,birthday,cover,favorite_teams,favorite_athletes,gender,hometown,education,interested_in,languages,location,political,relationship_status,religion,timezone,sports,website,work,about";
var _this = this;

passport.use(new FacebookStrategy({
    clientID: '1278316618953869',
    clientSecret: '5ff6ec4d95e96d084f3a8854c96324c1',
    callbackURL: 'https://salesintel.herokuapp.com/api/v1/facebook/return'
  },
  function(accessToken, refreshToken, profile, cb) {
    _this.accessToken = accessToken;
    // In this example, the user's Facebook profile is supplied as the user
    // record.  In a production-quality application, the Facebook profile should
    // be associated with a user record in the application's database, which
    // allows for account linking and authentication with other identity
    // providers.
    return cb(null, profile);
  }));

passport.serializeUser(function(user, cb) {
  console.log("USER", user)
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  console.log("USER", obj)
  cb(null, obj);
});

api.get('/auth',
  passport.authenticate('facebook'));

api.get('/return',
  passport.authenticate('facebook', { successRedirect: '/api/v1/linkedIn',
                                      failureRedirect: '/login' }));

api.get("/profile", function(req, res) {
  var accessToken = _this.accessToken;
  console.log(accessToken);
  // request({
  //     url: "https://graph.facebook.com/me?" + profileParamList + "&access_token=" + accessToken,
  //     method: "GET",
  //     json: true
  // }, function(error, response, body) {
  //     res.send(body);
  // });
  // console.log("https://graph.facebook.com/me?" + profileParamList + "&access_token=" + accessToken);
});

module.exports = api;
