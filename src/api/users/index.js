const router = require('express').Router();

/**
 * /api/users
 *
 * routes for users
 *
 */
router.use(`/`, require('./routes/root'));
router.use(`/create`, require('./routes/create'));
router.use(`/info`, require('./routes/info'));
router.use(`/login`, require('./routes/login'));
router.use(`/logout`, require('./routes/logout'));

module.exports = router;
