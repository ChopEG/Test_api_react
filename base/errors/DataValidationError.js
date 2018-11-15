const ValidationError = require('./ValidationError');

class DataValidationError extends global.Error {
  static isValidationError(error) {
    if (!error) {
      return false;
    }

    const [
      value,
    ] = Object.values(error);

    return value instanceof ValidationError;
  }

  static getValidationError(error) {
    const [
      key,
    ] = Object.keys(error);

    const [
      value,
    ] = Object.values(error);

    return {
      [key]: value.message,
    };
  }

  constructor(message, metadata, errors = []) {
    super(message);

    this.metadata = metadata;
    this.errors = errors.filter(this.constructor.isValidationError);
  }

  getErrors() {
    return this.errors.map(this.constructor.getValidationError);
  }

  getMessage() {
    return this.message;
  }

  getMetadata() {
    return this.metadata;
  }
}

module.exports = DataValidationError;
