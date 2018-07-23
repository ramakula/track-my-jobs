const router = require('express').Router();

router.route(`/`).get((req, res) => res.send('api/jobs/root'));

module.exports = router;
