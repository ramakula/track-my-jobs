const User = require('./index');

exports.create = (req, res, next) => {
  new User(res.locals.sanitizedUser).save((err, savedUser) => {
    if (err) return res.status(500).send({ err, message: `error saving user` });

    res.locals.savedUser = savedUser;
    next();
  });
};

/**
 * this controller is not used to update user email and password
 */
exports.update = (req, res, next) => {
  const user = { ...res.locals.sanitizedUser };
  delete user.email;
  delete user.password;

  User.findByIdAndUpdate(
    req.user.id,
    user,
    { new: true },
    (err, updatedUser) => {
      if (err)
        return res.status(500).send({ err, message: `error updating user` });

      res.locals.updatedUser = updatedUser;
      next();
    },
  );
};

exports.delete = (req, res, next) => {
  User.findByIdAndRemove({ _id: req.user.id }, err => {
    if (err)
      return res.status(500).send({ err, message: `error deleting user` });

    next();
  });
};
