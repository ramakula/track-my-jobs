const router = require('express').Router();

const utils = require('./utils');

router.route(`/`).post(utils.authenticate.user, (req, res) => {
  // if (err) res.status(422).send({ err, message: `error logging in` });

  res.send(req.user);
});

module.exports = router;
