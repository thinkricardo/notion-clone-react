const tasks = (arr) => arr.join(' && ');

module.exports = {
  hooks: {
    'commit-msg': tasks(['commitlint -E HUSKY_GIT_PARAMS']),
    'pre-commit': tasks(['npm run format:staged']),
    'pre-push': tasks(['npm run code:lint', 'npm run code:check']),
  },
};
