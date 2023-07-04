module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
    jest: true,
  },
  extends: ['plugin:@typescript-eslint/recommended',
    'plugin:i18next/recommended', 'plugin:react/recommended',
    'plugin:storybook/recommended', 'plugin:storybook/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'react', 'i18next'],
  rules: {
    'linebreak-style': ['error', 'unix'],
    // символ(ы) конца строки
    quotes: ['error', 'single'],
    // использовать одинарные кавычки
    semi: ['warn', 'always'],
    // точка с запятой в конце операторов
    // 'react/jsx-indent': [2,{ indentMode:2, ignoreTernaryOperator: true }],
    indent: ['error', 2, {
      SwitchCase: 1,
    }],
    // отступы в коде из 2 пробелов с учетом switch...case
    'arrow-parens': ['error', 'as-needed'],
    // скобки вокр одного параметра стр.функ
    'object-curly-spacing': ['error', 'always'],
    // пробелы между скобками в литералах объектов
    'array-bracket-spacing': ['error', 'never'],
    // пробелы между скобками в массивах
    'quote-props': ['error', 'as-needed'],
    // свойства объекта в кавычках или без кавычек
    'no-trailing-spaces': 'error',
    // не должно быть пробелов в конце строки
    'no-tabs': 'error',
    // символы табуляции в коде запрещена везде
    'comma-dangle': ['error', {
      // запятая после последнего элемента массива или объекта
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'never',
      exports: 'never',
      functions: 'never',
    }],
    'brace-style': ['error', '1tbs'],
    // правила для фигурных скобкок для блоков кода
    'keyword-spacing': 'error',
    // пробел слева и справа для ключевых слов
    'no-multi-spaces': 'error',
    // не допускается несколько пробелов подряд
    eqeqeq: 'error',
    // использовать === и !== вместо == и !=
    camelcase: 'error',
    // имена переменных и функций в стиле camelCase
    // 'max-len': ['error', 100], // максимальная длина строки
    'no-multiple-empty-lines': 'error',
    // не больше 2 пустых строк подряд
    'react/react-in-jsx-scope': [0],
    // отключить импорт react-a
    'i18next/no-literal-string': ['error', {
      markupOnly: true,
      ignoreAttribute: ['data-testid', 'to'],
    }],
    'space-in-parens': ['error', 'never'],
    // пробелы между скобок и параметров
    'react/jsx-curly-spacing': [2, {
      when: 'never',
      allowMultiline: true,
    }],
    'max-len': ['error', 100, {
      ignoreComments: true,
    }],
    'no-unused-vars': [1],
  },
  globals: {
    __IS_DEV__: true,
  },
  overrides: [{
    files: ['**/src/**/*.test.{ts,tsx}'],
    rules: {
      'i18next/no-literal-string': 'off',
    },
  }],
};