const router = require('express').Router();

const passport = require('../../../passport');

router
  .route(`/`)
  .post(passport.authenticate('local'), (req, res) => res.send(req.user));

module.exports = router;
