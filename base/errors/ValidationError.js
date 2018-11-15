class ValidationError extends global.Error {
  constructor(message, metadata) {
    super(message);

    this.metadata = metadata;
  }

  getErrors() {
    return this.errors;
  }

  getMessage() {
    return this.message;
  }

  getMetadata() {
    return this.metadata;
  }
}

module.exports = ValidationError;
