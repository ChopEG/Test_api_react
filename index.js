require('./config');

const http = require('http');
const app = require('./app');
const { logger } = require('./base');

const { PORT } = process.env;

const server = http.createServer(app);
server.listen(PORT, (err) => {
  if (err) {
    logger.error('Server listen failed', err);
  } else {
    logger.debug(`Server listening on port ${PORT}`);
  }
});
