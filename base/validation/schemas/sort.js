const {
  validateString,
  validateIn,
} = require('../validator');

const {
  negotiate,
} = require('../../utils');

module.exports = (
  {
    sortFields,
  },
) => [
  [
    'Sort should be a string',
    validateString,
  ],

  [
    'Invalid name of sort param',
    validateIn,
    [
      ...sortFields,
      ...sortFields.map(negotiate),
    ],
  ],
];
