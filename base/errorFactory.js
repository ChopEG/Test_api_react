const {
  DataValidationError,
  ValidationError,
  NotFoundError,
} = require('./errors');

const createDataValidationError = (message, metadata, errors = []) => new DataValidationError(message, metadata, errors);
const createValidationError = (message, metadata) => new ValidationError(message, metadata);
const createNotFoundError = (message, metadata) => new NotFoundError(message, metadata);

module.exports = {
  createDataValidationError,
  createValidationError,
  createNotFoundError,
};
