
var request = require('request');
var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var session = require('express-session');

var api = express.Router();


    api.use(bodyParser.json()); // support json encoded bodies
    api.use(bodyParser.urlencoded({
      extended: true
    }));


username = "srividya_j@yahoo.com";
password = "All4fun!";
auth = "Basic " + new Buffer(username + ":" + password).toString("base64");

api.get('/searchTwitterTweetsById', function(req, res) {
    console.log('inside twitter call');
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
