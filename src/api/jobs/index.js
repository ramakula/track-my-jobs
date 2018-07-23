const router = require('express').Router();

/**
 * /api/jobs
 *
 * routes for jobs
 *
 */
router.use(`/`, require('./routes/root'));

module.exports = router;
