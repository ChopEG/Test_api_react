const TransformationError = require('./TransformationError');

class DataTransformationError extends global.Error {
  static isTransformationError(error) {
    if (!error) {
      return false;
    }

    return error instanceof TransformationError;
  }

  static getTransformationError(error) {
    const field = error.getField();
    const message = error.getMessage();
    if (!field) {
      return message;
    }

    return {
      [field]: message,
    };
  }

  constructor(message, metadata, errors = []) {
    super(message);

    this.metadata = metadata;
    this.name = this.constructor.name;
    this.errors = errors.filter(this.constructor.isTransformationError);
  }

  getErrors() {
    return this.errors.map(this.constructor.getTransformationError);
  }

  getMessage() {
    return this.message;
  }

  getMetadata() {
    return this.metadata;
  }
}

module.exports = DataTransformationError;
