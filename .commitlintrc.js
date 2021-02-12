const globalScopes = ['app', 'config', 'deps', 'pkg', 'repo', 'style'];
const appScopes = ['block', 'page', 'state', 'store'];

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-empty': [2, 'never'],
    'scope-enum': [2, 'always', [...globalScopes, ...appScopes]],
  },
};
