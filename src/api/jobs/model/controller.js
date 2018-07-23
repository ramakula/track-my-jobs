const Job = require('./index');

exports.create = (req, res, next) => {
  new Job(req.body).save((err, newJob) => {
    if (err) {
      res.status(500).send({ err, message: `error saving job` });
      return;
    }

    req.newJob = newJob;
    next();
  });
};
