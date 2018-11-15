const errorFactory = require('../errorFactory');
const logger = require('../logger');
const { curry } = require('../utils');

const types = {
  String,
  Number,
  Boolean,
};

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
      throw new TypeError('Invalid type');
    }
  }
};

const toKeys = (keys, data) => {
  const transformedData = {};

  Object.keys(keys).forEach((key) => {
    const name = keys[key];
    if (typeof transformedData[name] === 'undefined') {
      transformedData[name] = data[key];
    }
  });

  return transformedData;
};

const toString = curry(toType, types.String);
const toNumber = curry(toType, types.Number);

const createTransformer = (message, transform) => (...args) => {
  try {
    return transform(...args);
  } catch (e) {
    logger.error('Transformation failed', e);

    const [data] = args;

    throw errorFactory.createTransformationError(message, {
      data,
    });
  }
};

const getTransformedData = (transformers, source) => {
  let target = source;
  for (let i = 0; i < transformers.length; i += 1) {
    const [message, transform, ...params] = transformers[i];
    const transformer = createTransformer(message, transform);
    target = transformer(target, ...params);
  }

  return target;
};

const transformData = (schema, data) => {
  let transformedData = {};
  if (Array.isArray(schema)) {
    try {
      transformedData = getTransformedData(schema, data);
    } catch (e) {
      e.setField('data');
      throw e;
    }
  } else {
    Object.keys(schema)
      .filter((field) => typeof data[field] !== 'undefined')
      .forEach((field) => {
        try {
          transformedData[field] = getTransformedData(
            schema[field],
            data[field],
          );
        } catch (e) {
          e.setField(field);
          throw e;
        }
      });
  }

  return transformedData;
};

module.exports = {
  types,
  toString,
  toNumber,
  toKeys,
  transformData,
};
