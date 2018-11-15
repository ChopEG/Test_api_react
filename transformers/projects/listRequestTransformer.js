const {
  transformer,
} = require('../../base');

const {
  curry,
} = require('../../base/utils');

const {
  types,
} = transformer;

const fields = {
  sort: types.String,
  limit: types.Number,
  offset: types.Number,
};

const transform = curry(transformer.transform, fields);

module.exports = {
  transform,
};
