exports.loggedIn = (req, res, next) => {
  if (!req.user) return res.status(401).send({ message: `not logged in` });

  next();
};
