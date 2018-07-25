const server = require('express')();

/**
 * trust first proxy in production
 */
if (JSON.parse(process.env.PROD)) server.set('trust proxy', 1);

/**
 * connect to database
 */
require('./db').connectToDB();

/**
 * server configuration
 */
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
