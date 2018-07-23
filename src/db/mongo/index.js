const DEV = process.env.DEV === 'true';
const MONGODB = JSON.parse(process.env.MONGODB);

const mongoose = require('mongoose');

if (DEV) {
  mongoose.connect(
    MONGODB.DEV.path,
    MONGODB.DEV.creds,
  );

  return;
}

// add MLAB connect here and to .env
