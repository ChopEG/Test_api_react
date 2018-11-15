const {
  DataValidationError,
  ValidationError,
  TransformationError,
  NotFoundError,
} = require('./errors');

const createDataValidationError = (message, metadata, errors = []) =>
  new DataValidationError(message, metadata, errors);

const createTransformationError = (message, metadata, errors = []) =>
  new TransformationError(message, metadata, errors);

const createValidationError = (message, metadata) =>
  new ValidationError(message, metadata);

const createNotFoundError = (message, metadata) =>
  new NotFoundError(message, metadata);

module.exports = {
  createDataValidationError,
  createTransformationError,
  createValidationError,
  createNotFoundError,
};
