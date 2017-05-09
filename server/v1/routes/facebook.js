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

var accessToken = "EAASKn0f7tI0BALpi0kVEVQHGkQfiZBraZAHMscEqyYO9f7PbAqFAy3or535vYUqbdSlJfkrI0a8tC8ARROQU0bI86z3ZBaIsc1uymZC2Tq8JH4pJrZAfuTGew0Bu1GQSBLUBRKPF5tFFfb7J8ZAt45xNz7TwA2dzaOdGedO3oiuUR0ZBwmRafYonatdroTNiIMZD"

api.get("/profile", function(req, res) {

      request({
          url: "https://graph.facebook.com/me?" + "access_token=" + accessToken,
          method: "GET",
          json: true



      }, function(error, response, body) {
          console.log(body);
          console.log("name" + body.name)
          res.send(body);

      });
        console.log("https://graph.facebook.com/me?" + accessToken);
});

// api.get('/profile', function(req, res) {
//
//     request({
//         url: "https://graph.facebook.com/me",
//         method: "GET",
//         json: true,
      //     headers: {
      //   'Accept': 'application/json',
      //   'Accept-Charset': 'utf-8',
      //   'User-Agent': 'my-reddit-client'
      // }
//
//     }, function(error, response, body) {
//         console.log(response.body);
//     });
//
// });

module.exports = api;
