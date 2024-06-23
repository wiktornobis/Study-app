module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    // 'plugin:@typescript-eslint/recommended-type-checked', // Zalecane ustawienia TypeScript z dodatkowymi sprawdzeniami typów
    // 'plugin:@typescript-eslint/strict-type-checked', // Dodatkowo restrykcyjne ustawienia TypeScript
    // 'plugin:@typescript-eslint/stylistic-type-checked', // Opcjonalne zalecenia dotyczące stylu TypeScript
    // 'plugin:react/recommended', // Rekomendowane ustawienia ESLint dla Reacta
    // 'plugin:react/jsx-runtime', // Obsługa składni JSX z użyciem React.createElement
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
