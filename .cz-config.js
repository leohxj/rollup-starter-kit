'use strict';

module.exports = {

  types: [
    {
      value: 'WIP',
      name : '💪  WIP: Work in progress'
    },
    {
      value: 'feat',
      name : '✨  Feature: A new feature'
    },
    {
      value: 'fix',
      name : '🐞  Bug Fixes: A bug fix'
    },
    {
      value: 'refactor',
      name : '🛠  Code Refactoring: A code change that neither fixes a bug nor adds a feature'
    },
    {
      value: 'docs',
      name : '📚  Documentation: Documentation only changes'
    },
    {
      value: 'test',
      name : '🏁  Tests: Adding missing tests or correcting existing tests'
    },
    {
      value: 'chore',
      name : '🗯  Chores: Changes that don\'t modify src or test files. Such as updating build tasks, package manager'
    },
    {
      value: 'style',
      name : '💅  Style: Code Style, Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)'
    },
    {
      value: 'revert',
      name : '⏪  revert: Revert to a commit'
    }
  ],

  scopes: [],

  allowCustomScopes: true,
  allowBreakingChanges: ["feat", "fix"]
};
