const { transformer, errorFactory } = require('../../base');
const { curry } = require('../../base/utils');
const schemas = require('../../base/transformation/schemas');

const schema = schemas.rename({
  limit: 'limit',
  offset: 'offset',
  sort: 'sort',
});

const createDataTransformationError = curry(
  errorFactory.createDataTransformationError,
  'List request adapter error',
);

const transformData = (data) => {
  try {
    return transformer.transformData(schema, data);
  } catch (e) {
    throw createDataTransformationError(
      {
        data,
      },
      [e],
    );
  }
};

module.exports = {
  transformData,
};
