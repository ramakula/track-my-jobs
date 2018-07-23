const router = require('express').Router();

/**
 * api endpoints
 */
router.use(`/jobs`, require('./jobs'));

module.exports = router;
