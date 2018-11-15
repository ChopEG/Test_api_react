const { transformer, errorFactory } = require('../../base');
const { curry } = require('../../base/utils');
const schemas = require('../../base/transformation/schemas');

const schema = {
  limit: schemas.limit(),
  skip: schemas.skip(),
  sort: schemas.sort(),
};

const createDataTransformationError = curry(
  errorFactory.createDataTransformationError,
  'List request transformation error',
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
