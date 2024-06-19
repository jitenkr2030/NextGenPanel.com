// src/controllers/ResourceController.js
const ResourceService = require('../services/ResourceService');

class ResourceController {
    async allocateResource(req, res) {
        try {
            const resource = await ResourceService.allocateResource(req.body);
            res.status(201).json(resource);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getResourceUsage(req, res) {
        try {
            const usage = await ResourceService.getResourceUsage(req.params.id);
            res.status(200).json(usage);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async updateResource(req, res) {
        try {
            const resource = await ResourceService.updateResource(req.params.id, req.body);
            res.status(200).json(resource);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = new ResourceController();
