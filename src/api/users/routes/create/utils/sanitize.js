exports.userInfo = (req, res, next) => {
  const USER_FIELDS = JSON.parse(process.env.USER_FIELDS || []);
  const sanitizedUser = {};

  if (USER_FIELDS.length === 0) {
    res.status(500).send({ message: `no user fields env found` });
    return;
  }

  for (let i = 0; i < USER_FIELDS.length; i++) {
    const field = USER_FIELDS[i];
    const info = req.body[field];

    if (!info) {
      res.status(422).send({ message: `please provide a ${field}` });
      return;
    }

    sanitizedUser[field] = info;
  }

  req.sanitizedUser = sanitizedUser;

  next();
};
