const DEV = process.env.DEV === 'true';

/**
 * dev dependencies
 */
const morgan = require('morgan')('combined');

/**
 * dependencies
 */
const express = require('express');
const path = require('path');

exports.devConfig = [morgan];

exports.config = [
  express.json(),
  express.static(path.join(__dirname, 'client/build')),
];
