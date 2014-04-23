'use strict';

/**
  Module dependencies
 */
var express = require('express')
  , logger = require('morgan')
  , bodyParser = require('body-parser')
  , debug = require('debug')('app');

function init(config) {

  var app = express();
  
  // Application settings
  app.enable('trust proxy');
  app.enable('case sensitive routing');
  app.enable('strict routing');

  if ("development" === config.env) {
    app.use(logger('dev'));
  } else {
    app.use(logger());
  }

  app.use(bodyParser.json());
    
  require('./controllers')(app);
  
  // Start your engines!
  var server = app.listen(config.port, function () {
    debug('Listening to %s', config.port);
  });
}

module.exports = init;