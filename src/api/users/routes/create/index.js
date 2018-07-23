const router = require('express').Router();

const user = require('../../model/controller');

router.route(`/`).post(user.create, (req, res) => res.send(req.newUser));

module.exports = router;
