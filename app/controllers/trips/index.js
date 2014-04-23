'use strict';

/**
  Module dependencies
 */
var express = require('express');

/**
  Module initialization
  */
var router = module.exports = express.Router();

router.all('*', function(req, res, next) {
  // add details of what is allowed in HTTP request headers to the response headers
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Credentials', false);
  // res.header('Access-Control-Max-Age', '86400');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
  // the next() function continues execution and will move onto the requested URL/URI
  next();
});

router.post('/', require('./start'));

router.get('/:tripID', require('./view'));
router.post('/:tripID/update', require('./update'));
router.post('/:tripID/end', require('./end'));
