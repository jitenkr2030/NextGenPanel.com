// authConfig.js

const authConfig = {
    jwtSecret: process.env.JWT_SECRET || 'your_jwt_secret',
    jwtExpiration: process.env.JWT_EXPIRATION || '1h',  // 1 hour by default
    saltRounds: process.env.SALT_ROUNDS || 10,
    tokenPrefix: 'Bearer ',
    googleOAuth: {
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackUrl: process.env.GOOGLE_CALLBACK_URL
    },
    facebookOAuth: {
        clientId: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        callbackUrl: process.env.FACEBOOK_CALLBACK_URL
    }
};

module.exports = authConfig;
