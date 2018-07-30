const Job = require('./index');

exports.create = (req, res, next) => {
  new Job(req.body).save((err, newJob) => {
    if (err) return res.status(500).send({ err, message: `error saving job` });

    res.locals.newJob = newJob;
    next();
  });
};

exports.retrieve = (req, res, next) => {
  const id = req.params.id;

  if (!id) return res.status(422).send({ message: `id with ${id} not found` });

  Job.findById(id, (err, job) => {
    if (err)
      return res
        .status(500)
        .send({ err, message: `error retrieving id ${id}` });

    if (!job)
      return res.status(422).send({ message: `job with id ${id} not found` });

    res.locals.job = job;
    next();
  });
};
