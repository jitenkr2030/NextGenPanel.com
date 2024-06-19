// src/controllers/StagingController.js
const StagingService = require('../services/StagingService');

class StagingController {
    async createStaging(req, res) {
        try {
            const staging = await StagingService.createStaging(req.body);
            res.status(201).json(staging);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async updateStaging(req, res) {
        try {
            const staging = await StagingService.updateStaging(req.params.id, req.body);
            res.status(200).json(staging);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async deleteStaging(req, res) {
        try {
            await StagingService.deleteStaging(req.params.id);
            res.status(200).json({ message: 'Staging environment deleted successfully' });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getStagings(req, res) {
        try {
            const stagings = await StagingService.getStagings();
            res.status(200).json(stagings);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = new StagingController();
