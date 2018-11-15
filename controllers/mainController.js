const {
  controller,
  errorFactory,
} = require('../base');

const {
  curry,
} = require('../base/utils');

const createNotFoundError = curry(errorFactory.createNotFoundError, 'Requested url not found');

const notFound = (req) => {
  throw createNotFoundError({
    originalUrl: req.originalUrl,
  });
};

module.exports = {
  notFound: controller.createHandler(notFound),
};
