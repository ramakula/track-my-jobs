const MONGODB = JSON.parse(process.env.MONGODB);

const mongoose = require('mongoose');

if (JSON.parse(process.env.DEV)) {
  mongoose.connect(
    MONGODB.DEV.path,
    MONGODB.DEV.creds,
    err => {
      if (err) {
        console.log(`Error connecting to ${MONGODB.DEV.path}`);

        return;
      }

      console.log(`Connected to ${MONGODB.DEV.path}`);
      return;
    },
  );
}

// add MLAB connect here and to .env
