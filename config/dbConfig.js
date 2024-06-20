// dbConfig.js

const dbConfig = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'nextgenpanel',
    port: process.env.DB_PORT || 3306,
    dialect: 'mysql',  // or 'postgres', 'sqlite', etc. based on your database
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};

module.exports = dbConfig;
