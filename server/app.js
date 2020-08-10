const config = require('config');
const express = require('express');
const logger = require('morgan');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const env = process.env.NODE_ENV || 'development'
if (env === 'development') {
  app.use(logger());
}

var server = app.listen(config.get('app.port'), function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Server started and running at http://%s:%s', host, port);
});

module.exports = server;
