var request = require('request');
var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var session = require('express-session');
var rp = require('request-promise');
var api = express.Router();

// TODO: create a controller js file called API to handle the request and response handling

// var salesintel = require('../controllers/automatic/api.salesintel.js');

// worldpay API headers
username = "srividya_j@yahoo.com";
password = "All4fun!";
auth = "Basic " + new Buffer(username + ":" + password).toString("base64");


api.use(bodyParser.json()); // support json encoded bodies
api.use(bodyParser.urlencoded({
  extended: true
}));

//api.use(session({
    //secret: 'sales_are_grape'
//}));

// TODO: create the route representation in the api.*.js file and link the route to the response handler
// the get and posts below actually mean HTTP GET and POST requests

// api.get("/dashboard",  salesintel.dashboard);
// api.post("/profile/:id", salesintel.userProfile);
// api.post("/calendar", salesintel.calendar);

// TODO: use the other controllers from Car2Claim as examples. since we're not going to be hot swaping apis
// just use the following below as a template for calls

// api.get("/dashboard",  function(req, res){
//   var allDataNeeded = Promise.all([twitter.tweets(req.twitterHeaders), facebook.status(req.facebookHeaders), linkedIn.jobs(req.linkedInHeaders)])
//
//   allDataNeeded(req).spread(function(tweets, facebookStatus, jobs){
//       // setup response object here
//   });
// });


api.get('/searchTwitterTweetsById', function(req, res) {
    console.log('test');
    request({
        url: "https://api.twitter.com/1.1/search/tweets.json?q=berz01&result_type=recent&count=4",
        method: "GET",
        headers: {
          authorization : 'OAuth oauth_consumer_key="6FqFfrssPECDdSN4hEHzdn4pW",oauth_token="833157469-aIlcg45OPnoLue7vEYRlftQcCvP5A8Jd3owHJ7nb",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1494352285",oauth_nonce="GaNxuU1l42i",oauth_version="1.0",oauth_signature="6%2FjOjm%2B777589xHn4Qwsid1NJFc%3D"'
        },
        json: true

    }, function(error, response, body) {
        res.send(body);

    });
    console.log(res);
});



module.exports = api;
