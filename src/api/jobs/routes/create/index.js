const router = require('express').Router();

const job = require('../../model/controller');

router.route(`/`).post(job.create, (req, res) => res.send(req.newJob));

module.exports = router;
