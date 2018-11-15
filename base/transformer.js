const errorFactory = require('./errorFactory');
const { curry } = require('./utils');

const types = {
  String,
  Number,
  Boolean,
};

const createTransformationError = curry(
  errorFactory.createTransformationError,
  'Transformation error',
);

const toType = (type, data) => {
  switch (type) {
    case types.String: {
      return String(data);
    }

    case types.Number: {
      return Number(data);
    }

    case types.Boolean: {
      return Boolean(data);
    }

    default: {
      const error = new TypeError('Invalid type');
      throw createTransformationError(
        {
          type,
          data,
        },
        [error],
      );
    }
  }
};

const transform = (fields, data) => {
  const transformedData = {};
  Object.keys(fields).forEach((key) => {
    if (data[key]) {
      transformedData[key] = toType(fields[key], data[key]);
    }
  });

  return {
    ...data,
    ...transformedData,
  };
};

module.exports = {
  types,
  transform,
};
