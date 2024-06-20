// paymentConfig.js

const paymentConfig = {
    provider: process.env.PAYMENT_PROVIDER || 'stripe',  // 'stripe', 'paypal', 'square', etc.
    stripe: {
        apiKey: process.env.STRIPE_API_KEY,
        webhookSecret: process.env.STRIPE_WEBHOOK_SECRET
    },
    paypal: {
        clientId: process.env.PAYPAL_CLIENT_ID,
        clientSecret: process.env.PAYPAL_CLIENT_SECRET,
        webhookId: process.env.PAYPAL_WEBHOOK_ID
    },
    square: {
        accessToken: process.env.SQUARE_ACCESS_TOKEN,
        locationId: process.env.SQUARE_LOCATION_ID
    }
};

module.exports = paymentConfig;
