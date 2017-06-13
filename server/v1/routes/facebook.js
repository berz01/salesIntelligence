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

//Six days before today 
var tokenDate =  new Date().getTime() + (30 * 24 * 60 * 60 * 1000);

var _this = this;

passport.use(new FacebookStrategy({
    clientID: '1278316618953869',
    clientSecret: '5ff6ec4d95e96d084f3a8854c96324c1',
    callbackURL: 'https://salesintel.herokuapp.com/api/v1/facebook/return'
  },
  function(accessToken, refreshToken, profile, cb) {
    _this.accessToken = accessToken;
    _this.tokenDate = new Date().getTime();
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
  passport.authenticate('facebook', {
    successRedirect: '/api/v1/facebook/token',
    failureRedirect: '/api/v1/facebook/auth'
  }));

api.get('/token', function(req, res) {
  res.send(_this.accessToken + ":" + tokenDate);
});

api.get("/profile", function(req, res) {
  var profileParamList = "fields=id,photos.limit(4){link,name,id,comments.limit(0)},family,name,birthday,cover,favorite_teams,favorite_athletes,gender,hometown,education,interested_in,languages,location,political,relationship_status,religion,timezone,sports,website,work,about";
  request({
    url: "https://graph.facebook.com/me?" + profileParamList + "&access_token=" + _this.accessToken,
    method: "GET",
    json: true
  }, function(error, response, body) {
    res.send(body);
  });
  console.log("https://graph.facebook.com/me?" + profileParamList + "&access_token=" + _this.accessToken);
});

module.exports = api;
