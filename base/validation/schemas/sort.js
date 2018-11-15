const { validateString, validateIn } = require('../validator');
const { negate } = require('../../utils');

module.exports = ({ sortFields }) => [
  ['Sort should be a string', validateString],
  [
    'Invalid name of sort param',
    validateIn,
    [...sortFields, ...sortFields.map(negate)],
  ],
];
