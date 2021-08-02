module.exports = {
  extends: 'eslint:recommended',
  rules: {
    indent: ['warn', 2],
    quotes: ['warn', 'single'],
    semi: ['error', 'never'],
    'linebreak-style': ['warn', 'unix'],
    'prettier/prettier': 'error',
    'no-unused-vars': 'warn',
    'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
    'new-cap': 'error',
    'no-underscore-dangle': ['error', { allow: ['_id', '_execute', '__basedir'] }],
    'max-len': ['error', { code: 150 }],
    'no-param-reassign': ['error', { props: false }],
    'object-curly-newline': ['error', { multiline: true }],
    'no-use-before-define': ['error', { functions: false, variables: false }],

    // Comments
    'no-warning-comments': [
      'error',
      {
        terms: ['todo', 'fix', 'fixme', 'perf'],
        location: 'anywhere',
      },
    ],
  },
}
