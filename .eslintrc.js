/**
 * @type {import('eslint').Config}
 */
module.exports = {
  root: true,
  ignorePatterns: ['node_modules', 'dist'],
  plugins: ['prettier'],
  extends: ['eslint:recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-unused-vars': 'off',
    'no-undef': 'off',
    'prettier/prettier': ['error', require('./prettier.config')],
  },
};
