const errorFactory = require('../errorFactory');

const PAGINATION_LIMIT_MIN = 1;
const PAGINATION_LIMIT_MAX = 100;
const PAGINATION_OFFSET_MIN = 0;
const PAGINATION_OFFSET_MAX = Number.MAX_SAFE_INTEGER;

const validateInt = (num) => {
  const int = parseInt(num, 10);
  return !Number.isNaN(int);
};

const validateRange = (num, min, max) => min <= num && num <= max;
const validateString = (str) => typeof str === 'string';
const validateIn = (data, arr) => arr.includes(data);

const createValidator = (message, validate) => (...args) => {
  if (!validate(...args)) {
    const [data] = args;

    return errorFactory.createValidationError(message, {
      data,
    });
  }

  return null;
};

const validateData = (schema, data) =>
  Object.keys(schema).map((field) => {
    if (typeof data[field] === 'undefined') {
      return {
        [field]: null,
      };
    }

    const validators = schema[field];
    for (let i = 0; i < validators.length; i += 1) {
      const [message, validate, ...params] = validators[i];

      const validator = createValidator(message, validate);
      const error = validator(data[field], ...params);
      if (error) {
        return {
          [field]: error,
        };
      }
    }

    return {
      [field]: null,
    };
  });

module.exports = {
  PAGINATION_LIMIT_MIN,
  PAGINATION_LIMIT_MAX,
  PAGINATION_OFFSET_MIN,
  PAGINATION_OFFSET_MAX,
  validateData,
  validateInt,
  validateString,
  validateRange,
  validateIn,
};
