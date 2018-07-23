const DEV = process.env.DEV === 'true';

/**
 * express server
 */
const express = require('express');

/**
 * server config
 */
const { devConfig, config } = require('./server.config');

/**
 * server
 */
const server = express();

if (DEV) {
  devConfig.forEach(c => server.use(c));
}

config.forEach(c => server.use(c));

/**
 * dev route
 */
if (DEV) {
  server.get(`/dev`, (req, res) => {
    res.send({ server: `running` });
  });
}

/**
 * routes
 */
// add here

/**
 * the "catchall" handler required when building project for production
 *
 * https://daveceddia.com/deploy-react-express-app-heroku/
 *
 */
server.get('*', (req, res) => {
  res.sendFile(require('path').join(__dirname + '/client/build/index.html'));
});

module.exports = server;
