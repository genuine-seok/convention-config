module.exports = {
  plugins: ["prettier"],
  extends: [
    "airbnb",
    "airbnb/hooks",
    "plugin:import/recommended",
    "plugin:promise/recommended",
    "prettier",
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
        // TODO: typescript 관련 룰 설정 필요
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
