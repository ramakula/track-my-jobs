const check = require('../../../../../db/utils/check');

exports.dbConnection = (req, res, next) => {
  const dbConnectionState = check.dbConnection();

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
