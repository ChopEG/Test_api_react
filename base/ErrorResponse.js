const httpStatus = require('http-status');
const {
  DataValidationError,
  NotFoundError,
} = require('./errors');

class ErrorResponse {
  static get isDevelopment() {
    return true;
  }

  constructor(err) {
    this.statusCode = httpStatus.INTERNAL_SERVER_ERROR;
    this.status = 'error';
    this.message = err.message;

    if (err instanceof DataValidationError) {
      this.statusCode = httpStatus.BAD_REQUEST;
      this.errors = err.getErrors();
    } else if (err instanceof NotFoundError) {
      this.statusCode = httpStatus.NOT_FOUND;
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
