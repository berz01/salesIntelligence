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



api.get("/maincall", function(req, res) {

  var accessToken = "300892574.89e7a6b.a48b4a6f87c94638a297c04b7a4a2663";

  console.log("hit instagram with AT " + accessToken)

  request({
    url: "https://api.instagram.com/v1/users/300892574/media/recent?access_token=" + accessToken,
    method: "GET",
    json: true
  }, function(error, response, body) {
    res.send(body);
  });
});

module.exports = api;
