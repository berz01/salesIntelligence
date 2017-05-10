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
username = "vidyagj04@gmail.com";
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


api.get('/searchPinterestPinsByUser', function(req, res) {
    console.log('inside pinterest call');
    request({
        url: "https://api.pinterest.com/v1/users/user/?access_token=ARzyzh0Ciwx90VIEJZFdNXKZsYX5FL1E8_J22dZD_-qh3yA2zwAAAAA&fields=first_name%2Cid%2Clast_name%2Curl%2Cbio%2Cimage%2Cusername",
        method: "GET",
        headers: {
          //authorization : 'ARzyzh0Ciwx90VIEJZFdNXKZsYX5FL1E8_J22dZD_-qh3yA2zwAAAAA'
          'cache-control': 'no-cache'
        },
        json: true

    }, function(error, response, body) {
        res.send(body);

    });
    console.log(res);
});



module.exports = api;
