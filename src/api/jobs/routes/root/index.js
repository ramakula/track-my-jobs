const router = require('express').Router();

router.route(`/`).get((req, res) => res.send({ jobs: `none yet` }));

module.exports = router;
