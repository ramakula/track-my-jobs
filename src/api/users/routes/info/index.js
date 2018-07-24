const router = require('express').Router();

const utils = require('../utils');

router.route(`/`).get(utils.check.ifLoggedIn, (req, res) => res.send(req.user));

module.exports = router;
