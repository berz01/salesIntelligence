// External frameworks and dependencies
const request = require('request');
const express = require('express');
const session = require('express-session');
const Promise = require('bluebird');
const https = require('https');
const autopromise = require('./v1/controllers/automatic/module.automatic.js');

// Server settings
const port = process.env.PORT || 8080;
const app = express();

// Setting view engine
app.set('view engine', 'ejs');


// Add your automatic client id and client secret here or as environment variables
const AUTOMATIC_CLIENT_ID = process.env.AUTOMATIC_CLIENT_ID || '2ee3c7c2f4b652fc1ee1';
const AUTOMATIC_CLIENT_SECRET = process.env.AUTOMATIC_CLIENT_SECRET || 'ba1590bcd38c31a310d79726e6be9a89d383aa69';

const oauth2 = require('simple-oauth2')({
    clientID: AUTOMATIC_CLIENT_ID,
    clientSecret: AUTOMATIC_CLIENT_SECRET,
    site: 'https://accounts.automatic.com',
    tokenPath: '/oauth/access_token'
});

// Enable sessions
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));

// New API
app.use('/api/v1/automatic', require('./v1/routes/automatic'));
app.use('/api/v1/smartcrash', require('./v1/routes/smartcrash'));

// Filters
app.get('/api/v1/*', function(req, res, next) {
    console.log("Hit Auth Filter For Access");
    next();
});

// Start server
var appPages = app.listen(port, function() {
    console.log("\nappPages now running on port", appPages.address().port);
});
