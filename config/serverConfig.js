// serverConfig.js

const serverConfig = {
    port: process.env.PORT || 3000,
    host: process.env.HOST || '0.0.0.0',
    apiPrefix: '/api/v1',
    corsOptions: {
        origin: process.env.CORS_ORIGIN || '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization']
    }
};

module.exports = serverConfig;
