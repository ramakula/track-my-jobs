const router = require('express').Router();

router.route(`/`).get((req, res) => res.send({ users: `none yet` }));

module.exports = router;
