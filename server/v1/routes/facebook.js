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
var accessToken = "EAACEdEose0cBAFvbJdzqKMlXWjraxMHzh499tVZAH0BhdWD8bZB8WZCyvv5CruNOCqgSvUNG0R71wxOrXAGZC8oHW3tMacSxV0mDTlXoxaVrCFj2BWy7HUEwDrTHd2AvFZChcpE8sfAKQ6Tsw56ZBxf8N802FyLq7ZAWARe01t4YiKR23uPG8LbZAAbfuSLZA1yEZD"

api.get("/profile", function(req, res) {

      request({
          url: "https://graph.facebook.com/me?" + profileParamList + "&access_token=" + accessToken,
          method: "GET",
          json: true



      }, function(error, response, body) {
          // console.log(body);
          // console.log("name" + body.name)
          res.send(body);

      });
        console.log("https://graph.facebook.com/me?" + profileParamList + "&access_token=" + accessToken);
});



module.exports = api;
