module.exports = {
  processors: [
    [
      'stylelint-processor-styled-components',
      {
        ignoreFiles: ['**/*.{css,scss}'],
      },
    ],
  ],
  extends: [
    'stylelint-config-standard',

    'stylelint-config-styled-components',

    'stylelint-prettier/recommended',
  ],
};
