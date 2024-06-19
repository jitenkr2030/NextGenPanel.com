// src/controllers/BrandingController.js
const BrandingService = require('../services/BrandingService');

class BrandingController {
    async updateBranding(req, res) {
        try {
            const branding = await BrandingService.updateBranding(req.body);
            res.status(200).json(branding);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getBranding(req, res) {
        try {
            const branding = await BrandingService.getBranding();
            res.status(200).json(branding);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = new BrandingController();
