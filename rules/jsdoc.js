module.exports = {
  plugins: ['jsdoc'],
  rules: {
    'jsdoc/require-jsdoc': [
      'warn',
      {
        require: {
          FunctionExpression: true,
          ClassDeclaration: true,
          MethodDefinition: true,
        },
        exemptEmptyConstructors: false,
      },
    ],
    'jsdoc/check-param-names': 'warn',
    'jsdoc/check-tag-names': 'warn',
    'jsdoc/check-types': 'warn',
    'jsdoc/newline-after-description': 'warn',
    'jsdoc/no-undefined-types': 'warn',
    'jsdoc/require-description': 'warn',
    'jsdoc/require-example': 'off',
    'jsdoc/require-param': 'warn',
    'jsdoc/require-param-description': 'warn',
    'jsdoc/require-param-name': 'warn',
    'jsdoc/require-param-type': 'warn',
    'jsdoc/require-returns': 'warn',
    'jsdoc/require-returns-check': 'warn',
    'jsdoc/require-returns-description': 'warn',
    'jsdoc/require-returns-type': 'warn',
  },
};
