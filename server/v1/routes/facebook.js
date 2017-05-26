var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var session = require('express-session');
var request = require('request');
var api = express.Router();

api.use(bodyParser.json()); // support json encoded bodies
api.use(bodyParser.urlencoded({
  extended: true
}));

// how to get access token !!
// must loggin to my app id
// https://developers.facebook.com/tools/accesstoken/


var profileParamList = "fields=id,photos.limit(4){link,name,id,comments.limit(0)},family,name,birthday,cover,favorite_teams,favorite_athletes,gender,hometown,education,interested_in,languages,location,political,relationship_status,religion,timezone,sports,website,work,about";
var accessToken = "EAACEdEose0cBADcQb5uTgZAdEjN89sCSrZCh5CYUzZB3YoP6ZAYHhV2h3xybvukXJPHWq8oldoZAC4hfBrkZAcADMPW31BcBJE1NoftZBbYn2S6Jz9w8AZATeGxEvOWFl42jDPoku8QToc0FojgU5L47Xh0i9ZALZAlrDzIBduZB1ZBCjgbUU7ACZBliGFpS6Sh5n0k4ZD"

api.get("/profile/:token", function(req, res) {
      var accessToken = req.params.token || accessToken;

      request({
          url: "https://graph.facebook.com/me?" + profileParamList + "&access_token=" + accessToken,
          method: "GET",
          json: true
      }, function(error, response, body) {
          res.send(body);
      });
        console.log("https://graph.facebook.com/me?" + profileParamList + "&access_token=" + accessToken);
}); 

module.exports = api;
