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
    'stylelint-config-rational-order',

    'stylelint-config-styled-components',

    'stylelint-prettier/recommended',
  ],
  rules: {
    'declaration-empty-line-before': null,

    'plugin/rational-order': [
      true,
      {
        'border-in-box-model': false,
        'empty-line-between-groups': true,
      },
    ],
  },
};
