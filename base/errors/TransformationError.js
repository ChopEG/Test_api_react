class TransformationError extends global.Error {
  constructor(message, metadata, field) {
    super(message);

    this.name = this.constructor.name;
    this.metadata = metadata;
    this.field = field;
  }

  getMessage() {
    return this.message;
  }

  getMetadata() {
    return this.metadata;
  }

  getField() {
    return this.field;
  }

  setField(value) {
    this.field = value;
  }
}

module.exports = TransformationError;
