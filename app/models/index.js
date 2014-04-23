'use strict';

module.exports = setupModels;

var mongoose = require('mongoose')
  , fs = require('fs')
  , debug = require('debug')('app');

function setupModels(config) {
  mongoose.connect(config.database);
  
  var db = mongoose.connection;
  
  db.on('error', console.error.bind(console, 'Mongoose error:'));
  db.once('open', function () {
    debug('Connected to MongoDB server [%s]', config.database);
    
    registerSchemas();
    
    
  });
}

function registerSchemas() {
  var files = fs.readdirSync(__dirname);
    
  files.forEach(function (item, index) {
    if (item === 'index.js') return;
    
    var model = require('./' + item);
  });
}