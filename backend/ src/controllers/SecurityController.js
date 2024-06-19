// src/controllers/SecurityController.js
const SecurityService = require('../services/SecurityService');

class SecurityController {
    async configureSecurity(req, res) {
        try {
            const config = await SecurityService.configureSecurity(req.body);
            res.status(200).json(config);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async updateSecurity(req, res) {
        try {
            const config = await SecurityService.updateSecurity(req.params.id, req.body);
            res.status(200).json(config);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getSecuritySettings(req, res) {
        try {
            const config = await SecurityService.getSecuritySettings();
            res.status(200).json(config);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = new SecurityController();
