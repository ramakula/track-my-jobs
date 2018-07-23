const router = require('express').Router();

/**
 * /api/users
 *
 * routes for users
 *
 */
router.use(`/`, require('./routes/root'));
router.use(`/create`, require('./routes/create'));

module.exports = router;
