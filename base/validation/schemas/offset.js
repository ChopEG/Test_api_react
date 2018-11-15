const { validateInt, validateRange } = require('../validator');

const PAGINATION_OFFSET_MIN = 0;
const PAGINATION_OFFSET_MAX = Number.MAX_SAFE_INTEGER;

module.exports = ({
  min = PAGINATION_OFFSET_MIN,
  max = PAGINATION_OFFSET_MAX,
} = {}) => [
  ['Offset should be an integer', validateInt],
  ['Offset not in range', validateRange, min, max],
];
