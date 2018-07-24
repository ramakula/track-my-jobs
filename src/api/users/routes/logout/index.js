const router = require('express').Router();

router.route(`/`).get((req, res) => {
  req.logout();

  res.send(`logged out`);
});

module.exports = router;
