let db;

switch (process.env.DB) {
  case 'MONGODB':
    db = require('./mongo');
    break;
  // add other db cases here
}

exports.db = db;
