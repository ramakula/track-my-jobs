const router = require('express').Router();

const utils = require('../utils');

router.route(`/`).post(utils.authenticate.user, (req, res) => {
  res.send(req.user);
});

module.exports = router;
