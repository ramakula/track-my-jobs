const DEV = process.env.DEV === 'true';

/**
 * dev dependencies
 */
const morgan = require('morgan')('combined');

/**
 * dependencies
 */
const express = require('express');

exports.devConfig = [morgan];

exports.config = [express.json()];
