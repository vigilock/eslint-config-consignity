module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: ['./rules/base.js', 'eslint-config-airbnb-base', './rules/jest.js', './rules/jsdoc.js', 'eslint-config-prettier'],
  plugins: ['eslint-plugin-prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {},
}
