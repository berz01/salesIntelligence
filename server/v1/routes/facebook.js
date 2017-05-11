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
var accessToken = "EAACEdEose0cBAK5kCMa1aVHCu179OEmYckAbZCkBVyzvNpzVLQtpDZCoOqZAio6lUZB1fC9jOW7gsJjwYbtZA2rBCiDnYYT5RH2JttaI0bvh27ubwUSgdUrjn58BZBIz7RaqCN2eTlWeDIBRuGh1ivblpSEtBjhd5ocnKnm3b38IJTrC8L9fHlDvPsJmCtCQEZD"

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
