module.exports = {
  extends: 'eslint:recommended',
  rules: {
    indent: ['error', 2],
    quotes: ['warn', 'single'],
    semi: ['error', 'never'],
    'no-extra-semi': 'error',
    'linebreak-style': ['warn', 'unix'],
    'no-unused-vars': 'warn',
    'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
    'new-cap': 'error',
    'no-underscore-dangle': [
      'error',
      {
        allow: ['_id', '_execute', '__basedir'],
        allowAfterThis: true,
        allowAfterSuper: true,
        allowAfterThisConstructor: true,
        enforceInMethodNames: true,
      },
    ],
    'max-len': ['error', { code: 150 }],
    'no-param-reassign': ['error', { props: false }],
    'object-curly-newline': ['error', { multiline: true }],
    'no-use-before-define': ['error', { functions: false, variables: false }],
    'array-element-newline': [
      'error',
      {
        ArrayExpression: 'consistent',
        ArrayPattern: { minItems: 3 },
      },
    ],
    'no-warning-comments': [
      'error',
      {
        terms: ['todo', 'fix', 'fixme', 'perf'],
        location: 'anywhere',
      },
    ],
    'arrow-parens': ['off', 'as-needed'],
    'no-plusplus': 'off',
  },
}
