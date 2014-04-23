'use strict';

/**
  Module dependencies
 */
var express = require('express');

/** 
  Module initialization
  */
var router = module.exports = express.Router();

router.get('/:userToken/trips', require('./trips'));
router.post('/register', require('./register'));