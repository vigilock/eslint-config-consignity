module.exports = {
  plugins: ['import'],
  rules: {
    'import/extensions': ['error', 'always'],
    'import/newline-after-import': ['error', { count: 1 }],
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        warnOnUnassignedImports: true,
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        groups: [
          'type', // prettier-ignore
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling'],
          'index',
          'object',
        ],
      },
    ],
    'import/no-cycle': ['error', { maxDepth: 1 }],
  },
}
