'use strict';

function setup(app) {
  app.use('/trips', require('./trips'));
  app.use('/users', require('./users'));
}

module.exports = setup;