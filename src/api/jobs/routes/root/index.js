const router = require('express').Router();

const utils = require('../utils');

router
  .route(`/`)
  .get(utils.check.dbConnection, utils.job.retrieve, (req, res) =>
    res.send({ id: req.params.id }),
  )
  .post(
    utils.check.loggedIn,
    utils.sanitize.jobInfo,
    utils.check.dbConnection,
    utils.job.create,
    utils.user.addJob,
    (req, res) => {
      res.send(utils.sanitize.job(res.locals.newJob));
    },
  );

router
  .route(`/:id`)
  .get(utils.check.dbConnection, utils.job.retrieve, (req, res) => {
    res.send(utils.sanitize.job(res.locals.job));
  });

module.exports = router;
