module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint'), 'plugin:react-hooks/recommended'],
  rules: {
    // your rules
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    semi: ['warn', 'never'],
    '@typescript-eslint/semi': ['warn', 'never'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx'] }],
  },
}
