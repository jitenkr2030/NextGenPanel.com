// src/controllers/MigrationController.js
const MigrationService = require('../services/MigrationService');

class MigrationController {
    async migrate(req, res) {
        try {
            const result = await MigrationService.migrate(req.body);
            res.status(200).json(result);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = new MigrationController();
