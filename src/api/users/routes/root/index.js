const router = require('express').Router();

const utils = require('../utils');

router
  .route(`/`)
  .get(utils.check.loggedIn, (req, res) =>
    res.send(utils.sanitize.userResponse(req.user)),
  )
  .post(
    utils.sanitize.userInfo,
    utils.check.dbConnection,
    utils.user.create,
    utils.authenticate.user,
    (req, res) => res.send(utils.sanitize.userResponse(res.locals.savedUser)),
  )
  .delete(
    utils.check.loggedIn,
    utils.check.dbConnection,
    utils.user.delete,
    (req, res) => res.status(204).send(),
  );

module.exports = router;
