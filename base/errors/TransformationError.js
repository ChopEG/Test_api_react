class TransformationError extends global.Error {
  static getMessage(error) {
    return error.message;
  }

  constructor(message, metadata, errors) {
    super(message);

    this.metadata = metadata;
    this.errors = errors;
  }

  getMessage() {
    return this.message;
  }

  getMetadata() {
    return this.metadata;
  }

  getErrors() {
    return this.errors.map(this.constructor.getMessage);
  }
}

module.exports = TransformationError;
