class NotFoundError extends global.Error {
  constructor(message, metadata) {
    super(message);

    this.name = this.constructor.name;
    this.metadata = metadata;
  }

  getMetadata() {
    return this.metadata;
  }
}

module.exports = NotFoundError;
