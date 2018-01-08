'use strict';
const types = require('commitlint-config-cz/lib/types')();

module.exports = {
  extends: ['cz'],
  rules: {
    'type-enum': [2, 'always', Object.keys(types)],
    'subject-case': [0]
  }
};
