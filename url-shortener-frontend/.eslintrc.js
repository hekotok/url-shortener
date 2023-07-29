module.exports = {
    'env': {
        'browser': true,
        'es2021': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    'overrides': [
        {
            'env': {
                'node': true
            },
            'files': [
                '.eslintrc.{js,cjs}'
            ],
            'parserOptions': {
                'sourceType': 'script'
            }
        }
    ],
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'plugins': [
        'react'
    ],
    'rules': {
        'no-multi-spaces': 'error',
        'no-trailing-spaces': 'error',
        'indent': [ 'error', 4 ],
        'semi': [ 'error', 'never' ],
        'curly': [ 'error', 'multi' ],
        'quotes': [ 'error', 'single' ],
        'eol-last': [ 'error', 'never' ],
        'brace-style': [ 'error', 'stroustrup' ],
        'comma-dangle': [ 'error', 'never' ],
        'arrow-parens': [ 'error', 'as-needed' ],
        'nonblock-statement-body-position': [ 'error', 'below' ],
        'object-curly-newline': [ 'error', { 'consistent': true } ],
        'object-curly-spacing': [ 'error', 'always' ],
        'array-bracket-spacing': [ 'error', 'always' ],
        'space-before-blocks': [ 'error', 'always' ],
        'comma-spacing': [ 'error', { 'before': false, 'after': true } ],
        'key-spacing': [ 'error', { 'beforeColon': false, 'afterColon': true } ],
        'no-multiple-empty-lines': [ 'error', { 'max': 1, 'maxEOF': 0 } ],
        'padded-blocks': [ 'error', 'never' ],
        'camelcase': [ 'error', {
            'properties': 'never',
            'ignoreDestructuring': true
        } ],
        'padding-line-between-statements': [
            'error',
            { 'blankLine': 'always', 'prev': '*', 'next': 'return' }
        ]
    }
}