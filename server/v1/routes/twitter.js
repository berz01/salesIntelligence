var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var session = require('express-session');
var api = express.Router();

api.use(bodyParser.json()); // support json encoded bodies
api.use(bodyParser.urlencoded({
    extended: true
}));

// TODO: use the other controllers from Car2Claim as examples. since we're not going to be hot swaping apis
// just use the following below as a template for calls

// api.get("/dashboard",  function(req, res){
//   var allDataNeeded = Promise.all([twitter.tweets(req.twitterHeaders), facebook.status(req.facebookHeaders), linkedIn.jobs(req.linkedInHeaders)])
//
//   allDataNeeded(req).spread(function(tweets, facebookStatus, jobs){
//       // setup response object here
//   });
// });

api.get("/maincall",  function(req, res){
    res.body = {"stuff":"to look at"};
});

module.exports = api;
