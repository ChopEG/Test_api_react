const { validateInt, validateRange } = require('../validator');

const PAGINATION_LIMIT_MIN = 1;
const PAGINATION_LIMIT_MAX = 100;

module.exports = ({
  min = PAGINATION_LIMIT_MIN,
  max = PAGINATION_LIMIT_MAX,
} = {}) => [
  ['Limit should be an integer', validateInt],
  ['Limit not in range', validateRange, min, max],
];
