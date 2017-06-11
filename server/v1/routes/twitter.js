"use strict";
var request = require('request');
var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var session = require('express-session');
var rp = require('request-promise');
var Twitter = require("node-twitter-api"),
  secret = include("secret"),
  Promise = require("bluebird");
var api = express.Router();


    api.use(bodyParser.json()); // support json encoded bodies
    api.use(bodyParser.urlencoded({
      extended: true
    }));

    module.exports = new function() {
    	this._twitter = new Twitter({
    		consumerKey: secret.twitter.consumerKey,
    		consumerSecret: secret.twitter.consumerSecret,
    		callback: secret.twitter.callbackUrl
    	});

    	this.requestToken = function() {
    		return new Promise(function(resolve, reject) {
    			this._twitter.getRequestToken(function(err, requestToken, requestSecret) {
    				if (err)
    					reject(err);
    				else {
    					this._requestToken = requestToken;
    					this._requestSecret = requestSecret;
    					resolve(requestToken);
    				}
    			}.bind(this));
    		}.bind(this));
    	};

    	this.accessToken = function(token, verifier) {
    		var secret = this._requestSecret;

    		this._verifier = verifier;

    		return new Promise(function(resolve, reject) {
    			this._twitter.getAccessToken(token, secret, verifier, function(err, accessToken, accessSecret) {
    				if (err)
    					reject(err);
    				else {
    					this._accessToken = accessToken;
    					this._accessSecret = accessSecret;
    					resolve(accessToken);
    				}
    			});
    		}.bind(this));
    	};

    	this.verifyCredentials = function(accessToken) {
    		var accessSecret = this._accessSecret;

    		return new Promise(function(resolve, reject) {
    			this._twitter.verifyCredentials(accessToken, accessSecret, function(err, user) {
    				if (err) reject(err);
    				else resolve(user);
    			});
    		}.bind(this));
    	};
    };




//
// username = "srividya_j@yahoo.com";
// password = "All4fun!";
// auth = "Basic " + new Buffer(username + ":" + password).toString("base64");
//
// api.get('/searchTwitterTweetsById', function(req, res) {
//     console.log('inside twitter call');
//     request({
//         url: "https://api.twitter.com/1.1/search/tweets.json?q=berz01&result_type=recent&count=4",
//         method: "GET",
//         headers: {
//           authorization : 'OAuth oauth_consumer_key="6FqFfrssPECDdSN4hEHzdn4pW",oauth_token="833157469-aIlcg45OPnoLue7vEYRlftQcCvP5A8Jd3owHJ7nb",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1494352285",oauth_nonce="GaNxuU1l42i",oauth_version="1.0",oauth_signature="6%2FjOjm%2B777589xHn4Qwsid1NJFc%3D"'
//         },
//         json: true
//
//     }, function(error, response, body) {
//         res.send(body);
//
//     });
//     console.log(res);
// });



module.exports = api;
