exports.jobInfo = (req, res, next) => {
  const JOB_FIELDS = JSON.parse(process.env.JOB_FIELDS || []);
  const sanitizedJob = {};

  if (JOB_FIELDS.length === 0) {
    return res.status(500).send({ message: `no job fields env found` });
  }

  for (let i = 0; i < JOB_FIELDS.length; i++) {
    const field = JOB_FIELDS[i];
    const info = req.body[field];

    if (!info) {
      return res.status(422).send({ message: `please provide a ${field}` });
    }

    sanitizedJob[field] = info;
  }

  res.locals.sanitizedJob = sanitizedJob;
  next();
};

exports.job = job => {
  return {
    ...job._doc,
    _id: undefined,
    __v: undefined,
    createdAt: undefined,
    updatedAt: undefined,
  };
};
