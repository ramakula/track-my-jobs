const DEV = JSON.parse(process.env.DEV);

const {
  bodyParser,
  cors,
  express,
  session,
  mongoose,
  mongoStore,
  passport,
  path,
} = require('./server.dependencies');

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
  express.json(),
  /**
   * cors
   */
  cors(JSON.parse(process.env.CORS_OPTIONS)),
  /**
   * static files for frontend
   */
  express.static(path.join(__dirname, 'client/build')),
  /**
   * `passport` requirements
   * and `session` requirements for `passport`
   *
   * http://www.passportjs.org/docs/configure/
   *
   */
  express.static('public'),
  session({
    ...JSON.parse(process.env.SESSION_OPTIONS),
    secret: process.env.SESSION_SECRET,
    store: new mongoStore({
      mongooseConnection: mongoose.connection,
    }),
  }),
  bodyParser.urlencoded({ extended: false }),
  passport.initialize(),
  passport.session(),

  // add more here
];

module.exports = config.concat(devConfig || []);
