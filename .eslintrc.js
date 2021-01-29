module.exports = {
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 2020,
  },
  env: {
    node: true,
  },
  overrides: [
    {
      files: ['**/*.{ts,tsx}'],
      extends: [
        'eslint:recommended',

        'plugin:@typescript-eslint/recommended',

        'plugin:react/recommended',
        'plugin:react-hooks/recommended',

        'plugin:prettier/recommended',
        'prettier/@typescript-eslint',
        'prettier/react',
      ],
      parserOptions: {
        project: './tsconfig.json',
      },
      settings: {
        react: {
          version: 'detect',
        },
      },
    },
  ],
};
