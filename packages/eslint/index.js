module.exports = {
  plugins: ["prettier"],
  extends: [
    "airbnb",
    "airbnb/hooks",
    "plugin:import/recommended",
    "plugin:promise/recommended",
    "prettier",
    ...[
      "./rules/base",
      "./rules/import",
      "./rules/jsx-a11y",
      "./rules/prettier",
      "./rules/promise",
      "./rules/react",
    ].map(require.resolve),
  ],
  env: {
    commonjs: true,
    es6: true,
    node: true,
    browser: true,
    jest: true,
  },
  parserOptions: {
    ecmaFeatures: { jsx: true },
    jsx: true,
    useJSXTextNode: true,
  },

  settings: {
    react: {
      version: "detect",
    },
  },

  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:import/typescript",
        ...["./rules/typescript"].map(require.resolve),
      ],
      settings: {
        /**
         * @description import plugin with Typescript configuration
         * @link https://github.com/alexgorbatchev/eslint-import-resolver-typescript#configuration
         */
        "import/parsers": {
          "@typescript-eslint/parser": [".ts", ".tsx"],
        },
      },
    },
  ],
};
