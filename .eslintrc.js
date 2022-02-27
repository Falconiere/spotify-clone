/* eslint-disable prettier/prettier */
module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'no-empty-function': 'off',
        '@typescript-eslint/no-empty-function': ['error'],
        quotes: 'off',
        '@typescript-eslint/quotes': ['error'],
        'object-curly-spacing': 'off',
        '@typescript-eslint/object-curly-spacing': ['error', 'always'],
      },
    },
  ],
};
