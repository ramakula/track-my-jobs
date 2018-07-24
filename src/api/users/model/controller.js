const User = require('./index');

exports.create = (req, res, next) => {
  new User(req.sanitizedUser).save((err, savedUser) => {
    if (err) {
      res.status(500).send({ err, message: `error saving user` });
      return;
    }

    req.savedUser = savedUser;
    next();
  });
};
