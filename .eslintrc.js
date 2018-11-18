module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "jest": true,
    "webextensions": true,
  },
  "extends": "airbnb",
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      // "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": [
    "react",
  ],
  "rules": {
    "eol-last": "off",
    "import/no-named-as-default": "off",
    "jsx-a11y/label-has-for": "off",
    "no-use-before-define": ["error", { "functions": false }],
    "react/jsx-filename-extension": "off",
    "react/no-danger": "off",
    "react/no-unescaped-entities": "off",
    "no-console": ["error", { "allow": ["warn", "error"] }],
    "indent": [
      "error",
      2,
      {
        "SwitchCase": 1,
      },
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ]
  },
  "settings": {
    "import/resolver": {
      "node": {
        "moduleDirectory": [
          "node_modules",
          "src",
        ],
      },
    }
  }
};
