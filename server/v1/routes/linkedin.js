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

api.get("/maincall",  function(req, res){


  request({
    url: "https://api.linkedin.com/v1/people/~?oauth2_access_token=AQWIUJK4biSi45Ds6O5IG7ykcwIpIO3CYR6FqHGk5rWfSVlZv3Eo-WU9K_Aq0R3jLnUGlx6uALd_etUem2xaKyfJJ51vG7FArSMijzmRcdMEdXiEC8wdOy6piulNx4HNQqsfErxMIgluEhgzxpPYPrQjOj6kBP3s6ydmVEaBX4WuxYlAGM4&format=json",
    method: "GET",
    json: true
  }, function(error, response, body) {
    res.send(response.body);
  });
});

module.exports = api;
