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
    res.body = {"stuff":"to look at"};
});

module.exports = api;
