'use strict';

/**
  Module dependencies
 */
var express = require('express');

/** 
  Module initialization
  */
var router = module.exports = express.Router();

router.post('/', require('./start'));

router.get('/:tripID', require('./view'));
router.post('/:tripID/update', require('./update'));
router.post('/:tripID/end', require('./end'));