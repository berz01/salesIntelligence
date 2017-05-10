var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var session = require('express-session');
var request = require('request');
require('request-debug')(request);

var api = express.Router();

api.use(bodyParser.json()); // support json encoded bodies
api.use(bodyParser.urlencoded({
  extended: true
}));

var subKey = "0ea5ebb2c0e149e383f3f128574476ce";
// Ocp-Apim-Subscription-Key

api.post("/computerVision", function(req, res) {

  var myJSONObject = {
      url: req.body.url,
  };

  request({
      url: "https://eastus2.api.cognitive.microsoft.com/vision/v1.0/describe?maxCandidates=1",
      method: "POST",
      headers: {
      "Ocp-Apim-Subscription-Key" : subKey
      },
      json: true,
      body: myJSONObject
  }, function(error, response, body) {
    // console.log('REQUEST RESULTS:', error, res.statusCode, body);
    //   console.log("response BODY***" + response.body);
    //   console.log("***BODY**" + body.requestId);
      res.send(body);

  });


});



module.exports = api;
