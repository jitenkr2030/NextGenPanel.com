const express = require('express');
const router = express.Router();
const analyticsController = require('../controllers/analyticsController');

// Analytics routes
router.get('/', analyticsController.getAnalyticsData);
router.post('/', analyticsController.createAnalyticsData);

module.exports = router;
