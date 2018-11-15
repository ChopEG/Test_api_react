const { validator, errorFactory } = require('../../base');
const { curry } = require('../../base/utils');
const {
  order: orderSchema,
  limit: limitSchema,
  offset: offsetSchema,
} = require('../../base/validation/schemas');

const orderFields = ['name', 'budget'];
const schema = {
  limit: limitSchema(),
  offset: offsetSchema(),
  order: orderSchema({
    orderFields,
  }),
};

const createDataValidationError = curry(
  errorFactory.createDataValidationError,
  'List request validation error',
);

const validateData = (req) => {
  const { query } = req;
  const data = {
    order: query.order,
    limit: query.limit,
    offset: query.offset,
  };

  const errors = validator.validateData(schema, data);
  const dataValidationError = createDataValidationError(
    {
      query,
    },
    errors,
  );

  if (dataValidationError.errors.length > 0) {
    throw dataValidationError;
  }

  return data;
};

module.exports = {
  validateData,
};
