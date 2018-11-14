const {
    validateString,
    validateIn,
} = require('../validator');

module.exports = (
    {
        sortFields,
    }
) => [
    [
        'Sort should be a string',
        validateString,
    ],

    [
        'Invalid name of sort param',
        validateIn,
        sortFields,
    ],
];
