const DEV = process.env.DEV === 'true';

/**
 * export empty array if not in dev mode
 */
if (DEV) {
  exports.devConfig = [require('morgan')('combined')];
} else {
  exports.devConfig = [];
}

exports.config = [
  require('express').json(),
  require('express').static(require('path').join(__dirname, 'client/build')),
];
