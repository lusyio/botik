// http://eslint.org/docs/user-guide/configuring
module.exports = {
    'root': true,
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'sourceType': 'module',
    },
    'env': {
        'es6': true,
        'browser': true,
        'node': true
    },
    'rules': {
        'semi': 'off',
        'arrow-parens': 'off',
        'comma-dangle': 'off',
        'indent': 'off',
        'require-jsdoc': 'off',
        'operator-linebreak': 'off',
        'valid-jsdoc': 'off',
        'space-before-function-paren': 'off'
    },
    'plugins': [
        'react',
    ],
    'extends': [
        'plugin:react/recommended',
        'eslint:recommended',
        'google'
    ]
}
