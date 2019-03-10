module.exports = {
  extends: [
    '@strv/eslint-config-react/v16',
    '@strv/eslint-config-react/optional',
    // '@strv/eslint-config-react/style',
    /*
      There is an error in there:
          Configuration for rule "react/destructuring-assignment" is invalid:
          Value {"ignoreClassFields":true} should be string.
      Before fixed, let's keep it commented.
    */
    'prettier',
    'prettier/react',
  ],
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'react/no-did-mount-set-state': 0,
    'prefer-named-capture-group': 0,
  },
}
