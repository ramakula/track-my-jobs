const router = require('express').Router();

/**
 * /api/jobs
 *
 * routes for jobs
 *
 */
router.use(`/`, require('./routes/root'));
router.use(`/create`, require('./routes/create'));

module.exports = router;
