// src/controllers/MarketingController.js
const MarketingService = require('..//services/MarketingService');

class MarketingController {
    async createCampaign(req, res) {
        try {
            const campaign = await MarketingService.createCampaign(req.body);
            res.status(201).json(campaign);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getCampaigns(req, res) {
        try {
            const campaigns = await MarketingService.getCampaigns();
            res.status(200).json(campaigns);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = new MarketingController();
