const passport = require('../../../../passport');

exports.user = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) return next(err);

    if (!user) return res.status(422).send(info);

    req.login(user, function(err) {
      if (err) return next(err);

      return next();
    });
  })(req, res, next);
};
