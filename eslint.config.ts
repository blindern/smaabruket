import js from '@eslint/js'
import prettier from 'eslint-plugin-prettier/recommended'
import tseslint from 'typescript-eslint'
import reactPlugin from 'eslint-plugin-react'
import { defineConfig } from 'eslint/config'

export default defineConfig(
  prettier,
  js.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  reactPlugin.configs.flat['recommended']!,
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  reactPlugin.configs.flat['jsx-runtime']!,
  {
    ignores: ['build/', 'dist/'],
  },
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
    rules: {
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'react/prop-types': 'off',
    },
  },
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
)
