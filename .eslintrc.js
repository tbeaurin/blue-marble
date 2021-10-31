var restrictedGlobals = require('confusing-browser-globals')

module.exports = {
  root: true,
  parser: 'babel-eslint',
  globals: {
    'VERSION': true
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      classes: true,
      jsx: true
    }
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  plugins: [
    'import',
    'jsx-a11y',
    'react',
    'react-hooks',
    'formatjs'
  ],
  settings: {
    react: {
      pragma: 'React',
      version: 'detect'
    }
  },
  rules: {
    'no-restricted-globals': ['error'].concat(restrictedGlobals),
    'no-console': 'error',
    'react/prop-types': 'off',
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false
      }
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'formatjs/no-offset': 'error',
    "indent": ["error", 2]
  }
}
