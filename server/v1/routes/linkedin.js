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

  var profileParamList = ["id", "firstName", "phonetic-first-name", "lastName", "phonetic-last-name", "maiden-name", "formatted-phonetic-name", "headline", "industry", "summary", "positions", "skills", "location", "specialties", "num-connections", "current-share"];
  var accessToken = "AQWIUJK4biSi45Ds6O5IG7ykcwIpIO3CYR6FqHGk5rWfSVlZv3Eo-WU9K_Aq0R3jLnUGlx6uALd_etUem2xaKyfJJ51vG7FArSMijzmRcdMEdXiEC8wdOy6piulNx4HNQqsfErxMIgluEhgzxpPYPrQjOj6kBP3s6ydmVEaBX4WuxYlAGM4";
  var format = "json";

  request({
    url: "https://api.linkedin.com/v1/people/~" + getProfileParams(profileParamList) + "?oauth2_access_token=" + accessToken + "&format=" + format,
    method: "GET",
    json: true
  }, function(error, response, body) {
    res.send(body);
  });
});

function getProfileParams(paramList) {

  var params = ":(";
  for (i = 0; i < paramList.length; i++) {
    params += paramList[i];

    if (i == paramList.length - 1) {
      params += ")";
    } else {
      params += ",";
    }
  }

  return params;
}

module.exports = api;
