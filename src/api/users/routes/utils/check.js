exports.loggedIn = (req, res, next) => {
  if (!req.user) return res.status(401).send({ message: `not logged in` });

  next();
};

exports.dbConnection = (req, res, next) => {
  const dbConnectionState = require('../../../../db/utils/check').dbConnection();

  switch (dbConnectionState.state) {
    case true:
      next();
      return;
    case false:
      res.status(500).send({ message: dbConnectionState.message });
      return;

    default:
      if (JSON.parse(process.env.DEBUG))
        console.log(`unknown db connection state: ${dbConnectionState.state}`);
  }
};
