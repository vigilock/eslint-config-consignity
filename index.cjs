module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    './rules/base.js',
    './rules/jest.js',
    './rules/jsdoc.js',
    './rules/import.js',
    './rules/prettier.js',
    'plugin:security/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  rules: {},
}
