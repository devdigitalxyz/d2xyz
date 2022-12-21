module.exports = {
  extends: [
    'next',
    'turbo',
    'prettier',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    // '@next/next/no-html-link-for-pages': 'off',
    // 'react/jsx-key': 'off',
    '@typescript-eslint/consistent-type-imports': 'warn',
  },
  ignorePatterns: ['**/storybook-static', '**/out', '**/dist'],
};
