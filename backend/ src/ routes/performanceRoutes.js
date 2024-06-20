const express = require('express');
const router = express.Router();
const performanceController = require('../controllers/performanceController');

// Performance monitoring routes
router.get('/', performanceController.getPerformanceMetrics);
router.post('/', performanceController.createPerformanceMetric);

module.exports = router;
