const path = require('path');
const logger = require('morgan');
const feathers = require('@feathersjs/feathers');
const configuration = require('@feathersjs/configuration');
const express = require('@feathersjs/express');
const socketio = require('@feathersjs/socketio');


const middleware = require('./middleware');
const services = require('./services');
const appHooks = require('./app.hooks');
const channels = require('./channels');
const keys = require('../config/keys');


// init Spotify API wrapper
const SpotifyWebApi = require('spotify-web-api-node');
const redirectUri = 'http://localhost:3030/callback';
let tokenExpirationEpoch;
const spotifyApi = new SpotifyWebApi({
  clientId : keys.spotifyClientId,
  clientSecret : keys.spotifySecretId,
  redirectUri : redirectUri
});

const app = express(feathers());

// Load app configuration
app.configure(configuration());
// body parsing & logging
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger('dev'))
// app.use(logger.log('debug', 'The Polonaise App'))
// Host the public folder
app.use('/', express.static(app.get('public')));

// Set up Plugins and providers
app.configure(express.rest());
app.configure(socketio());
// Configure other middleware (see `middleware/index.js`)
app.configure(middleware);
// Set up our services (see `services/index.js`)
app.configure(services);
// Set up event channels (see channels.js)
app.configure(channels);

app.get("/login", function (request, response) {
  const spotifyScopesArray = ['playlist-read-private', 'playlist-read-collaborative', 'user-library-read', 'user-read-playback-state',
                       'user-top-read', 'user-read-recently-played', 'user-read-currently-playing', 'streaming'];
  const authorizeURL = spotifyApi.createAuthorizeURL(spotifyScopesArray);
  console.log(authorizeURL)
  response.send(authorizeURL);
});

// Exchange Authorization Code for an Access Token
app.get("/callback", function (request, response) {
  const authorizationCode = request.query.code;
  console.log(authorizationCode);
  
  
  // Check folks haven't just gone direct to the callback URL
  if (!authorizationCode) {
    response.redirect('/');
  } else {
    response.sendFile(__dirname + '/public/callback.html');
  }
  
  spotifyApi.authorizationCodeGrant(authorizationCode)
  .then(function(data) {

    // Set the access token and refresh token
    spotifyApi.setAccessToken(data.body['access_token']);
    spotifyApi.setRefreshToken(data.body['refresh_token']);

    // Save the amount of seconds until the access token expired
    tokenExpirationEpoch = (new Date().getTime() / 1000) + data.body['expires_in'];
    console.log('Retrieved token. It expires in ' + Math.floor(tokenExpirationEpoch - new Date().getTime() / 1000) + ' seconds!');
  }, function(err) {
    console.log('Something went wrong when retrieving the access token!', err.message);
  });
});

// Configure a middleware for 404s and the error handler
app.use(express.notFound());
app.use(express.errorHandler({ logger }));

app.hooks(appHooks);

module.exports = app;
