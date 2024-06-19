// src/controllers/ResellerController.js
const ResellerService = require('../services/ResellerService');

class ResellerController {
    async createReseller(req, res) {
        try {
            const reseller = await ResellerService.createReseller(req.body);
            res.status(201).json(reseller);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getResellers(req, res) {
        try {
            const resellers = await ResellerService.getResellers();
            res.status(200).json(resellers);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = new ResellerController();
