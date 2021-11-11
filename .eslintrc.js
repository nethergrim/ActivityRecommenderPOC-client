module.exports = {
  root: true,
  extends: [
    'airbnb-typescript',
    'plugin:jest/recommended',
    'plugin:jest/style',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    'eslint-plugin-react',
    'react',
    'react-native',
    'react-hooks',
  ],
  env: {
    jest: true,
  },
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    'no-console': 'error',
    'no-return-await': 'off',
    '@typescript-eslint/no-redeclare': 'off',
    '@typescript-eslint/return-await': ['error', 'in-try-catch'],
    'jsx-quotes': ['error', 'prefer-double'],
    'react/jsx-fragments': [0, 'element'],
    'react/destructuring-assignment': [0, 'never'],
    'max-len': ['error', 120],
    'no-multiple-empty-lines': ['error', {max: 1}],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'semi', // 'none' or 'semi' or 'comma'
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi', // 'semi' or 'comma'
          requireLast: false,
        },
      },
    ],
    'max-lines': ['error', 200],
    'import/no-default-export': 2,
    'import/prefer-default-export': 0,
    'import/order': [
      2,
      {
        groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: '@ui/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '@managers/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '@builders/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '@store/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '@api/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '@screens/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '@components/**',
            group: 'external',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
      },
    ],
    'arrow-body-style': 0,
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-indent': [
      'error',
      2,
      {indentLogicalExpressions: true, checkAttributes: true},
    ],
    'arrow-body-style': 0,
    'react/prop-types': 0,
    'react/display-name': ['error'],
    'react/jsx-props-no-spreading': 0,
    'react-hooks/rules-of-hooks': 'error',
    'jest/no-alias-methods': 'error',
    'jest/expect-expect': 'error',
    'jest/no-commented-out-tests': 'error',
    'react/no-unstable-nested-components': ['error', {allowAsProps: true}],
    'react/require-default-props': 0,
    'react/no-unused-prop-types': ['error', {ignore: ['testID']}],
    'no-prototype-builtins': 0,
  },
  overrides: [
    {
      files: ['*.test.ts', '*.test.tsx'],
      rules: {
        'react-hooks/rules-of-hooks': 'off',
        'max-lines': 'off',
        'react/display-name': 'off',
      },
    },
  ],
};
