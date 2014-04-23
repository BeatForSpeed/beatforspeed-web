'use strict';

var mongoose = require('mongoose')
  , debug = require('debug')('app');

function createModel() {
  var schema = mongoose.Schema({
    token: String,
    createdAt: { type: Date, default: Date.now },
    lastUpdateAt: { type: Date, default: Date.now }
  });
  
  mongoose.model('Trip', schema);
}

module.exports = createModel();