var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var session = require('express-session');
var api = express.Router();

// TODO: create a controller js file called API to handle the request and response handling

// var salesintel = require('../controllers/automatic/api.salesintel.js');

api.use(bodyParser.json()); // support json encoded bodies
api.use(bodyParser.urlencoded({
    extended: true
}));

api.use(session({
    secret: 'sales_are_grape'
}));

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

module.exports = api;
