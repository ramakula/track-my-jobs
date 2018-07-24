const DEV = JSON.parse(process.env.DEV);

let devConfig, config;

if (DEV) {
  devConfig = [
    require('morgan')('combined'),
    // add more here
  ];
}

config = [
  /**
   * parser
   */
  require('express').json(),
  /**
   * cors
   */
  require('cors')(JSON.parse(process.env.CORS_OPTIONS)),
  /**
   * static files for frontend
   */
  require('express').static(require('path').join(__dirname, 'client/build')),
  /**
   * `passport` requirements
   * and `session` requirements for `passport`
   *
   * http://www.passportjs.org/docs/configure/
   *
   */
  require('express').static('public'),
  // require('session')({
  // ...process.env.SESSION_OPTIONS,
  // secret: process.env.SESSION_SECRET,
  // store: new (require('connect-mongo')(require('session'))({
  // mongooseConnection: require('./db/mongo').connection,
  // }))(),
  // }),
  // add more here
];

module.exports = config.concat(devConfig || []);
