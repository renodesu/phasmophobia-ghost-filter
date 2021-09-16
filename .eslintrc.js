module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:import/recommended',
    // 'plugin:import/errors',
    // 'plugin:import/warnings',
    'plugin:import/typescript',
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  rules: {
    'no-use-before-define': 0,
    '@typescript-eslint/no-use-before-define': 2,
    'react/no-unescaped-entities': 0,
    indent: 0,
    'no-unused-vars': 0,
    '@typescript-eslint/indent': [2, 2],
    'import/order': 2,
    'import/no-unresolved': [
      'error',
      {
        ignore: ['\\.svg\\?component$']
      }
    ]
  }
}
