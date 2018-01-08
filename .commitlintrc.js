'use strict';
const config = require('commitlint-config-cz/lib/config')();

module.exports = {
  extends: ['cz'],
  rules: config
};
