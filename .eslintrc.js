module.exports = {
  extends: [
    'eslint:recommended',

    'plugin:import/recommended',

    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  env: {
    node: true,
  },
  rules: {
    'no-console': 'error',

    'import/imports-first': 'error',
    'import/no-cycle': 'error',
  },
  overrides: [
    {
      files: ['**/*.{ts,tsx}'],
      extends: [
        'eslint:recommended',

        'plugin:@typescript-eslint/recommended',

        'plugin:react/recommended',
        'plugin:react-hooks/recommended',

        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:import/react',

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
      rules: {
        // prop-types is disabled until fix is available
        'react/prop-types': 'off',
      },
    },
  ],
};
