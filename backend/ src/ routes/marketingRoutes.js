const express = require('express');
const router = express.Router();
const marketingController = require('../controllers/marketingController');

// Marketing management routes
router.get('/', marketingController.getAllMarketingCampaigns);
router.get('/:id', marketingController.getMarketingCampaignById);
router.post('/', marketingController.createMarketingCampaign);
router.put('/:id', marketingController.updateMarketingCampaign);
router.delete('/:id', marketingController.deleteMarketingCampaign);

module.exports = router;
