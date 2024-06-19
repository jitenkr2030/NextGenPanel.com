// src/controllers/AnalyticsController.js
const AnalyticsService = require('../services/AnalyticsService');

class AnalyticsController {
    async getAnalytics(req, res) {
        try {
            const analytics = await AnalyticsService.getAnalytics();
            res.status(200).json(analytics);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async generateReport(req, res) {
        try {
            const report = await AnalyticsService.generateReport(req.body);
            res.status(200).json(report);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = new AnalyticsController();
