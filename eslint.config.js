const txoConfig = require('eslint-config-txo-typescript')

/** @type {import('eslint').Linter.FlatConfig[]} */
const config = [
  ...txoConfig.default,
  {
    files: ['example/**/*.ts'],
    languageOptions: {
      parserOptions: {
        project: './example/tsconfig.json'
      }
    }
  }
]

module.exports = config
