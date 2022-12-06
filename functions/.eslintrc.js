module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "google",
  ],
  rules: {
    "quotes": ["error", "double"],
    "new-cap": "off",
  },
  overrides: [
    {
      files: "**/*.spec.js",
      env: {
        mocha: true,
      },
      rules: {
        "no-unused-vars": "off",
      },
    },
  ],
};
