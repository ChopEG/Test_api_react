const { validateString, validateIn } = require('../validator');
const { negate } = require('../../utils');

module.exports = ({ orderFields }) => [
  ['Order should be a string', validateString],
  [
    'Invalid name of order param',
    validateIn,
    [...orderFields, ...orderFields.map(negate)],
  ],
];
