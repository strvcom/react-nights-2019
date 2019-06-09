module.exports = {
  extends: [
    '@strv/react',
    '@strv/react/optional',
    '@strv/typescript',
    'prettier',
    'prettier/react',
  ],
  // plugins: ['cypress'],
  env: {
    jest: true,
  },
  rules: {
    'react/prop-types': 0,
    'no-shadow': [2, { allow: ['name'] }],

    // to discuss
    'no-use-before-define': 0,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/member-ordering': 0,
    // not released
    'react/state-in-constructor': 0,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
}
