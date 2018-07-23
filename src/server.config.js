const DEV = process.env.DEV === 'true';

let devConfig, config;

if (DEV) {
  devConfig = [
    require('morgan')('combined'),
    // add more here
  ];
}

config = [
  require('express').json(),
  require('express').static(require('path').join(__dirname, 'client/build')),
  // add more here
];

module.exports = config.concat(devConfig || []);
