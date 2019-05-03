module.exports = {
  extends: [
    '@strv/eslint-config-react/v16',
    '@strv/eslint-config-react/optional',
    '@strv/eslint-config-typescript',
    'prettier',
    'prettier/react',
  ],
  plugins: ['react-hooks', 'cypress'],
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
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
    'react/prop-types': 0,
    'no-shadow': [2, { allow: ['name'] }],
    // let's enforce this approach a bit
    'import/no-default-export': 1,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-use-before-define': 'warn',
    '@typescript-eslint/no-use-before-define': 'warn',
  },
}
