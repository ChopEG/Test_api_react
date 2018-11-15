const {
  DataValidationError,
  NotFoundError,
} = require('./errors');

class ErrorResponse {
  static get isDevelopment() {
    return true;
  }

  constructor(err) {
    this.statusCode = 500;
    this.status = 'error';
    this.message = err.message;

    if (err instanceof DataValidationError) {
      this.statusCode = 400;
      this.errors = err.getErrors();
    } else if (err instanceof NotFoundError) {
      this.statusCode = 404;
    }

    if (this.constructor.isDevelopment && err.getMetadata) {
      this.metadata = err.getMetadata();
    }
  }

  getStatus() {
    return this.status;
  }

  getStatusCode() {
    return this.statusCode;
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

module.exports = ErrorResponse;
