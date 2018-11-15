const mongoose = require('mongoose');
const logger = require('../base/logger');

const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_NAME,
} = process.env;

mongoose.Promise = global.Promise;

mongoose.connect(`mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
  useNewUrlParser: true,
});

mongoose.connection.on('error', err => logger.error('[mongoose.connection]', err));

module.exports = mongoose.connection;
