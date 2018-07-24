const router = require('express').Router();

const utils = require('../utils');

router
  .route(`/`)
  .get(utils.check.loggedIn, (req, res) =>
    res.send(utils.sanitize.userResponse(req.user)),
  );

module.exports = router;
