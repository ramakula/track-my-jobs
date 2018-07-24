exports.ifLoggedIn = (req, res, next) => {
  if (!req.user) {
    res.status(422).send({ message: `not logged in` });
    return;
  }

  next();
};
