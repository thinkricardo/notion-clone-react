module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:react/recommended',
  ],
  plugins: ['@typescript-eslint', 'react'],
  env: {
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
