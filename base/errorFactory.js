const {
  DataTransformationError,
  DataValidationError,
  ValidationError,
  TransformationError,
  NotFoundError,
} = require('./errors');

const createDataTransformationError = (message, metadata, errors = []) =>
  new DataTransformationError(message, metadata, errors);

const createDataValidationError = (message, metadata, errors = []) =>
  new DataValidationError(message, metadata, errors);

const createTransformationError = (message, metadata) =>
  new TransformationError(message, metadata);

const createValidationError = (message, metadata) =>
  new ValidationError(message, metadata);

const createNotFoundError = (message, metadata) =>
  new NotFoundError(message, metadata);

module.exports = {
  createDataTransformationError,
  createDataValidationError,
  createTransformationError,
  createValidationError,
  createNotFoundError,
};
