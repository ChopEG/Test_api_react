const {
  validateInt,
  validateRange,
  PAGINATION_LIMIT_MIN,
  PAGINATION_LIMIT_MAX,
} = require('../validator');

module.exports = ({
  min = PAGINATION_LIMIT_MIN,
  max = PAGINATION_LIMIT_MAX,
} = {}) => [
  ['Limit should be an integer', validateInt],
  ['Limit not in range', validateRange, min, max],
];
