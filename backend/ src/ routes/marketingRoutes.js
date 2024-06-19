// src/routes/marketingRoutes.js
const express = require('express');
const router = express.Router();
const MarketingController = require('../controllers/MarketingController');

router.get('/', MarketingController.getCampaigns);
router.post('/', MarketingController.createCampaign);

module.exports = router;
