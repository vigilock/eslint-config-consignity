[![Publish Package](https://github.com/vigilock/eslint-config-consignity/actions/workflows/publish.yaml/badge.svg)](https://github.com/vigilock/eslint-config-consignity/actions/workflows/publish.yaml)

# eslint-config-consignity

This package provide eslint configuration for all consignity projects.

## Installation

Just install the package by :

```bash
npm install --save-dev eslint eslint-config-consignity
```

Then create **.eslintrc.cjs** as below :

```javascript
// .eslintrc.cjs
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "consignity"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {},
};
```
