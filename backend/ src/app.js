// Import necessary modules
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const helmet = require('helmet');
const compression = require('compression');
const config = require('./config/serverConfig');

// Import route files
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const webServerRoutes = require('./routes/webServerRoutes');
const domainRoutes = require('./routes/domainRoutes');
const fileManagerRoutes = require('./routes/fileManagerRoutes');
const applicationRoutes = require('./routes/applicationRoutes');
const databaseRoutes = require('./routes/databaseRoutes');
const securityRoutes = require('./routes/securityRoutes');
const resourceRoutes = require('./routes/resourceRoutes');
const backupRoutes = require('./routes/backupRoutes');
const analyticsRoutes = require('./routes/analyticsRoutes');
const emailRoutes = require('./routes/emailRoutes');
const collaborationRoutes = require('./routes/collaborationRoutes');
const apiRoutes = require('./routes/apiRoutes');
const containerRoutes = require('./routes/containerRoutes');
const stagingRoutes = require('./routes/stagingRoutes');
const ecommerceRoutes = require('./routes/ecommerceRoutes');
const performanceRoutes = require('./routes/performanceRoutes');
const brandingRoutes = require('./routes/brandingRoutes');
const migrationRoutes = require('./routes/migrationRoutes');
const aiRoutes = require('./routes/aiRoutes');
const cloudRoutes = require('./routes/cloudRoutes');
const billingRoutes = require('./routes/billingRoutes');
const resellerRoutes = require('./routes/resellerRoutes');
const marketingRoutes = require('./routes/marketingRoutes');
const networkingRoutes = require('./routes/networkingRoutes');
const supportRoutes = require('./routes/supportRoutes');

// Initialize the Express application
const app = express();

// Middleware setup
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Database connection
mongoose.connect(config.db.uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})
.then(() => console.log('Database connected successfully'))
.catch(err => console.error('Database connection error:', err));

// Define the API routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/web-servers', webServerRoutes);
app.use('/api/domains', domainRoutes);
app.use('/api/files', fileManagerRoutes);
app.use('/api/applications', applicationRoutes);
app.use('/api/databases', databaseRoutes);
app.use('/api/security', securityRoutes);
app.use('/api/resources', resourceRoutes);
app.use('/api/backups', backupRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/emails', emailRoutes);
app.use('/api/collaboration', collaborationRoutes);
app.use('/api/apis', apiRoutes);
app.use('/api/containers', containerRoutes);
app.use('/api/staging', stagingRoutes);
app.use('/api/ecommerce', ecommerceRoutes);
app.use('/api/performance', performanceRoutes);
app.use('/api/branding', brandingRoutes);
app.use('/api/migration', migrationRoutes);
app.use('/api/ai', aiRoutes);
app.use('/api/cloud', cloudRoutes);
app.use('/api/billing', billingRoutes);
app.use('/api/reseller', resellerRoutes);
app.use('/api/marketing', marketingRoutes);
app.use('/api/networking', networkingRoutes);
app.use('/api/support', supportRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start the server
const PORT = config.server.port || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
