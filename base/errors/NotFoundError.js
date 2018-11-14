class NotFoundError extends global.Error {
    constructor(message, metadata) {
        super(message);

        this.metadata = metadata;
    }

    getMetadata() {
        return this.metadata;
    }
}

module.exports = NotFoundError;
