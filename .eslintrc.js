module.exports = {
  extends: [
    '@strv/eslint-config-react/v16',
    '@strv/eslint-config-react/optional',
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
    'prefer-named-capture-group': 0,
    'react/no-did-mount-set-state': 1,
    'react/prop-types': 1,
  },
}
