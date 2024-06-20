const logger = require('../utils/logger');

const loggingMiddleware = (req, res, next) => {
  const start = Date.now();
  logger.info(`Incoming request: ${req.method} ${req.url} at ${new Date().toISOString()}`);

  res.on('finish', () => {
    const duration = Date.now() - start;
    logger.info(`Request handled: ${req.method} ${req.url} with status ${res.statusCode} in ${duration}ms`);
  });

  next();
};

module.exports = loggingMiddleware;
