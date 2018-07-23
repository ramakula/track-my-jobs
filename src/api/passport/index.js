const passport = require('passport');

const localStrategy = require('./providers/local');
const twitterStrategy = require('./providers/twitter');

const User = require('../users/model');

passport.use(localStrategy);
passport.use(twitterStrategy);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});
