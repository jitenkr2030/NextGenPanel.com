// src/controllers/PerformanceController.js
const PerformanceService = require('../services/PerformanceService');

class PerformanceController {
    async getPerformanceMetrics(req, res) {
        try {
            const metrics = await PerformanceService.getPerformanceMetrics();
            res.status(200).json(metrics);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async tunePerformance(req, res) {
        try {
            const result = await PerformanceService.tunePerformance(req.body);
            res.status(200).json(result);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = new PerformanceController();
