const server = require('express')();
const db = require('./db');

require('./server.config').forEach(config => server.use(config));

/**
 * server routes
 */
server.use(`/api`, require('./api'));
// add more here

/**
 * the "catchall" handler
 *
 * https://daveceddia.com/deploy-react-express-app-heroku/
 *
 */
server.get(`*`, (req, res) => {
  res.sendFile(require('path').join(__dirname + '/client/build/index.html'));
});

module.exports = server;
