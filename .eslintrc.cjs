const isDev = process.env.NODE_ENV === "development"

module.exports = {
  "root": true,
  "globals": {
    "NodeJS": true,
  },
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": [
    "plugin:jsdoc/recommended",
    "@nuxtjs/eslint-config",
    "prettier",
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "jsdoc"
  ],
  "rules": {
    "no-console": isDev ? "off" : "warning",
    "no-unused-vars": ["warn", {
      "argsIgnorePattern": "^_",
      "varsIgnorePattern": "^_",
      "ignoreRestSiblings": true
    }],
    "vue/no-unused-components": isDev ? "off" : "warn",
    "vue/valid-v-slot": ["error", { "allowModifiers": true }],

    "semi": "error"
  }
};
