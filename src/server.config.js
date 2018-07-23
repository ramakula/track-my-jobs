const DEV = process.env.DEV === 'true';

exports.devConfig = [require('morgan')('combined')];

exports.config = [
  require('express').json(),
  require('express').static(require('path').join(__dirname, 'client/build')),
];
