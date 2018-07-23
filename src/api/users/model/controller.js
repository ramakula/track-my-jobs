const User = require('./index');

exports.create = (req, res, next) => {
  new User(req.body).save((err, newUser) => {
    if (err) {
      res.status(500).send({ err, message: `error saving user` });
      return;
    }

    req.newUser = newUser;
    next();
  });
};
