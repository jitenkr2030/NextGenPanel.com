// cloudConfig.js

const cloudConfig = {
    provider: process.env.CLOUD_PROVIDER || 'aws',  // 'aws', 'azure', 'gcp', etc.
    aws: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        region: process.env.AWS_REGION || 'us-east-1',
        s3Bucket: process.env.AWS_S3_BUCKET || 'nextgenpanel-bucket'
    },
    azure: {
        storageAccount: process.env.AZURE_STORAGE_ACCOUNT,
        storageAccessKey: process.env.AZURE_STORAGE_ACCESS_KEY,
        containerName: process.env.AZURE_CONTAINER_NAME || 'nextgenpanel-container'
    },
    gcp: {
        projectId: process.env.GCP_PROJECT_ID,
        clientEmail: process.env.GCP_CLIENT_EMAIL,
        privateKey: process.env.GCP_PRIVATE_KEY.replace(/\\n/g, '\n'),
        bucketName: process.env.GCP_BUCKET_NAME || 'nextgenpanel-bucket'
    }
};

module.exports = cloudConfig;
