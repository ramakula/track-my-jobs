const router = require('express').Router();

/**
 * /api/users
 *
 * routes for users
 *
 */
router.use(`/`, require('./routes/root'));
router.use(`/create`, require('./routes/create'));
router.use(`/login`, require('./routes/login'));

module.exports = router;
