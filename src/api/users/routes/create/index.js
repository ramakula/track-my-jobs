const router = require('express').Router();

const utils = require('./utils');
const user = require('../../model/controller');

router
  .route(`/`)
  .post(
    utils.sanitize.userInfo,
    utils.check.dbConnection,
    user.create,
    (req, res) => res.send(req.savedUser),
  );

module.exports = router;
