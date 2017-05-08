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

// TODO: create a config file that's ignore in the git repo but extracts the key values
// needed for the api calls or set them to environment variables like what's done
// below
const OTHER_API_ID = process.env.AUTOMATIC_CLIENT_ID; // || configFile.AUTOMATIC_CLIENT_ID
const OTHER_API_SECRET = process.env.AUTOMATIC_CLIENT_SECRET; // || configFile.AUTOMATIC_CLIENT_SECRET

// TODO: how to structure an oauth client
// const oauth2 = require('simple-oauth2')({
//     clientID: AUTOMATIC_CLIENT_ID,
//     clientSecret: AUTOMATIC_CLIENT_SECRET,
//     site: 'https://accounts.automatic.com',
//     tokenPath: '/oauth/access_token'
// });

// TODO: determine if sessions are necessary. I don't think they are since node isn't handling the front end
// but it's here for knowledge away
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));

// TODO: make the filter for /api/* instead of /api/v1/* after you remove
// the examples below in app.use()
// Filters
app.get('/api/v1/*', function(req, res, next) {
    console.log("Hit Auth Filter For Access");
    next();
});

// New API
// TODO: examlple - app.use('/api/v1/automatic', require('./v1/routes/automatic'));
// TODO: examlple - app.use('/api/v1/smartcrash', require('./v1/routes/smartcrash'));
app.use('/api/v1', require('./v1/routes/sales-intel'));

// Start server
var salesIntelServer = app.listen(port, function() {
    console.log("\nThe sales intel server is now running on port", salesIntelServer.address().port);
});
