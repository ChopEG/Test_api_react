const {
  validateInt,
  validateRange,
  PAGINATION_OFFSET_MIN,
  PAGINATION_OFFSET_MAX,
} = require('../validator');

module.exports = ({
  min = PAGINATION_OFFSET_MIN,
  max = PAGINATION_OFFSET_MAX,
} = {}) => [
  ['Offset should be an integer', validateInt],
  ['Offset not in range', validateRange, min, max],
];
