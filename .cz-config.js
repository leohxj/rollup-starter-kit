'use strict';

module.exports = {

  types: [
    {
      value: '💪  WIP',
      name : '💪  WIP: Work in progress'
    },
    {
      value: '✨  feat',
      name : '✨  Feature: A new feature'
    },
    {
      value: '🐞  fix',
      name : '🐞  Bug Fixes: A bug fix'
    },
    {
      value: '✏️  chore',
      name : '✏️  Chores: Other changes that don\'t modify src or test files'
    },
    {
      value: '🎨  style',
      name : '🎨  Style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)'
    },
    {
      value: '📚  docs',
      name : '📚  Documentation: Documentation only changes'
    },
    {
      value: '🛠  refactor',
      name : '🛠  Code Refactoring: A code change that neither fixes a bug nor adds a feature'
    },
    {
      value: '🚀  perf',
      name : '🚀  Performance Improvements: A code change that improves performance'
    },
    {
      value: '🏁  test',
      name : '🏁  Tests: Adding missing tests or correcting existing tests'
    },
    {
      value: '🏗️  build',
      name : '🏗️  Builds: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)'
    },
    {
      value: '⏪  revert',
      name : '⏪  revert: Revert to a commit'
    }
  ],

  scopes: [],

  allowCustomScopes: true
};
