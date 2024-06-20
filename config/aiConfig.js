// aiConfig.js

const aiConfig = {
    provider: process.env.AI_PROVIDER || 'openai',  // 'openai', 'aws', 'azure', etc.
    openai: {
        apiKey: process.env.OPENAI_API_KEY,
        model: process.env.OPENAI_MODEL || 'text-davinci-003'
    },
    aws: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        region: process.env.AWS_REGION || 'us-east-1',
        comprehend: {
            endpoint: process.env.AWS_COMPREHEND_ENDPOINT
        }
    },
    azure: {
        apiKey: process.env.AZURE_API_KEY,
        endpoint: process.env.AZURE_ENDPOINT
    }
};

module.exports = aiConfig;
