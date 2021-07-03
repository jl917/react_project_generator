module.exports = ({ typescript }) => `{
  "parser": "${typescript ? '@typescript-eslint/parser' : 'babel-eslint'}",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "useJSXTextNode": true,
    ${typescript ? `"project": "./tsconfig.json"` : `"sourceType": "module",
    "allowImportExportEverywhere": false,
    "codeFrame": true`}
  },
  "plugins": ["prettier"],
  "extends": [
    "airbnb",
    "plugin:prettier/recommended"
    ${typescript ? `,"plugin:@typescript-eslint/recommended"` : ""}
  ],
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "rules": {
    "prettier/prettier": "error",
    "max-len": ["error", {"code": 100}],
    "prefer-promise-reject-errors": "off",
    "react/jsx-filename-extension": "off",
    "react/prop-types": "off",
    "no-return-assign": "off",
    "no-console": "off",
    "import/extensions": "off",
    "import/no-unresolved": "off"
  },
  "globals": {
    "MODE": "readonly"
  }
}`
