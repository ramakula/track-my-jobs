const router = require('express').Router();

const utils = require('../utils');

router
  .route(`/`)
  .post(
    utils.sanitize.userInfo,
    utils.check.dbConnection,
    utils.user.create,
    (req, res) => res.send(res.locals.savedUser),
  );

module.exports = router;
