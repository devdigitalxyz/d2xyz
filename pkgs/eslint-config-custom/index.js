module.exports = {
  extends: ["next", "turbo", "prettier"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "react/jsx-key": "off",
  },
  ignorePatterns: ["**/storybook-static", "**/out", "**/dist"],
};
