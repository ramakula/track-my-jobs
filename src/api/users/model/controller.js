const User = require('./index');

exports.create = (req, res, next) => {
  new User(res.locals.sanitizedUser).save((err, savedUser) => {
    if (err) {
      res.status(500).send({ err, message: `error saving user` });
      return;
    }

    res.locals.savedUser = savedUser;
    next();
  });
};

exports.delete = (req, res, next) => {
  User.findByIdAndRemove({ _id: req.user.id }, err => {
    if (err)
      return res.status(500).send({ err, message: `error deleting user` });

    next();
  });
};
