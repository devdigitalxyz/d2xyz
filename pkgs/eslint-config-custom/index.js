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
    'import/no-anonymous-default-export': 'off',
  },
  ignorePatterns: ['**/storybook-static', '**/out', '**/dist'],
};
