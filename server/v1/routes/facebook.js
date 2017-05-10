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

var profileParamList = "fields=id,family,name,birthday,age_range,cover,favorite_teams,favorite_athletes,gender,hometown,education,interested_in,languages,email,location,political,relationship_status,religion,timezone,sports,website,work,about";
var accessToken = "EAACEdEose0cBAO9moEZASZC0u9QbZArnpl0OxItdBQYJ08Jhg6jPZCsdsvepRhwPPNU2LTY3mJmDbV5mfAmkLjyeufHcHuABTfqjR8NcmVaZBOL0EW68kZARWQGV0QxwB0F6blQQLSZCCKZA3tBorYhVOgjwzZAgd2rrZAvczPEvcQjoUBZCRvMRmESE3hZC8Uwl7ngZD"

api.get("/profile", function(req, res) {

      request({
          url: "https://graph.facebook.com/me?" + profileParamList + "&access_token=" + accessToken,
          method: "GET",
          json: true



      }, function(error, response, body) {
          console.log(body);
          console.log("name" + body.name)
          res.send(body);

      });
        console.log("https://graph.facebook.com/me?" + profileParamList + "&access_token=" + accessToken);
});



module.exports = api;
