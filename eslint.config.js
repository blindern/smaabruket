import js from '@eslint/js'
import prettier from 'eslint-plugin-prettier/recommended'
import globals from 'globals'
import tseslint from 'typescript-eslint'
// @ts-expect-error: Missing types.
import reactRecommended from 'eslint-plugin-react/configs/recommended.js'
// @ts-expect-error: Missing types.
import reactJsxRuntime from 'eslint-plugin-react/configs/jsx-runtime.js'

export default tseslint.config(
  prettier,
  js.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  reactRecommended,
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  reactJsxRuntime,
  {
    ignores: ['build/', 'dist/'],
  },
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
      },
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
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
