const path = require('path');
const favicon = require('serve-favicon');
const compress = require('compression');
const cors = require('cors');
const helmet = require('helmet');
const logger = require('winston');

const feathers = require('@feathersjs/feathers');
const configuration = require('@feathersjs/configuration');
const express = require('@feathersjs/express');
const socketio = require('@feathersjs/socketio');


const middleware = require('./middleware');
const services = require('./services');
const appHooks = require('./app.hooks');
const channels = require('./channels');

const app = express(feathers());

// Load app configuration
app.configure(configuration());
// Enable CORS, security, compression, favicon and body parsing
app.use(cors());
app.use(helmet());
app.use(compress());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(favicon(path.join(app.get('public'), 'favicon.ico')));
// Host the public folder
app.use('/', express.static(app.get('public')));
app.use('/', express.static(__dirname + '/client/public'));

app.get('/paper-demo', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/public/paper-demo.html'));
});
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/public/build/index.html'));
});

// Set up Plugins and providers
app.configure(express.rest());
app.configure(socketio());

// Configure other middleware (see `middleware/index.js`)
app.configure(middleware);
// Set up our services (see `services/index.js`)
app.configure(services);
// Set up event channels (see channels.js)
app.configure(channels);

// Configure a middleware for 404s and the error handler
app.use(express.notFound());
app.use(express.errorHandler({ logger }));

app.hooks(appHooks);

module.exports = app;
