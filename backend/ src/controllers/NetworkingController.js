// src/controllers/NetworkingController.js
const NetworkingService = require('../services/NetworkingService');

class NetworkingController {
    async configureDNS(req, res) {
        try {
            const dns = await NetworkingService.configureDNS(req.body);
            res.status(200).json(dns);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async updateDNS(req, res) {
        try {
            const dns = await NetworkingService.updateDNS(req.params.id, req.body);
            res.status(200).json(dns);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getDNSSettings(req, res) {
        try {
            const dns = await NetworkingService.getDNSSettings();
            res.status(200).json(dns);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = new NetworkingController();
