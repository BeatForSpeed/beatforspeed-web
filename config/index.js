'use strict';

var config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  database: require('./database')
};

module.exports = config;