// src/controllers/CloudController.js
const CloudService = require('../services/CloudService');

class CloudController {
    async provisionCloudResource(req, res) {
        try {
            const resource = await CloudService.provisionCloudResource(req.body);
            res.status(201).json(resource);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async deprovisionCloudResource(req, res) {
        try {
            await CloudService.deprovisionCloudResource(req.params.id);
            res.status(200).json({ message: 'Cloud resource deprovisioned successfully' });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getCloudResources(req, res) {
        try {
            const resources = await CloudService.getCloudResources();
            res.status(200).json(resources);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = new CloudController();
