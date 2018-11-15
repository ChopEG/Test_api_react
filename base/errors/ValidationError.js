class ValidationError extends global.Error {
  constructor(message, metadata) {
    super(message);

    this.metadata = metadata;
  }

  getMessage() {
    return this.message;
  }

  getMetadata() {
    return this.metadata;
  }
}

module.exports = ValidationError;
