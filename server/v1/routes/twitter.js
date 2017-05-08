var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var session = require('express-session');
var api = express.Router();

api.use(bodyParser.json()); // support json encoded bodies
api.use(bodyParser.urlencoded({
    extended: true
}));

api.get("/maincall",  function(req, res){
  console.log("hit twitter");
  var data = {"stuff":"to look at"};
  res.send(data);
});

module.exports = api;
