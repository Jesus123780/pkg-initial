module.exports = {
  extends: ['plugin:storybook/recommended'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    requireConfigFile: false
  },
  rules: {
    semi: ['error', 'never'],
    'storybook/hierarchy-separator': 'error',
    'storybook/default-exports': 'off'
  },
  overrides: [
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      rules: {
        'semi': ['error', 'never'],
        'storybook/hierarchy-separator': 'error',
        'storybook/default-exports': 'off'
      }
    }
  ]
}
