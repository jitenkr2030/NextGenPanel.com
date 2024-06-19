// src/controllers/AIController.js
const AIService = require('../services/AIService');

class AIController {
    async executeAIModel(req, res) {
        try {
            const result = await AIService.executeAIModel(req.body);
            res.status(200).json(result);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = new AIController();
