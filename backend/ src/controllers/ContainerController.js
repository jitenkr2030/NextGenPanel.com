// src/controllers/ContainerController.js
const ContainerService = require('../services/ContainerService');

class ContainerController {
    async createContainer(req, res) {
        try {
            const container = await ContainerService.createContainer(req.body);
            res.status(201).json(container);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async updateContainer(req, res) {
        try {
            const container = await ContainerService.updateContainer(req.params.id, req.body);
            res.status(200).json(container);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async deleteContainer(req, res) {
        try {
            await ContainerService.deleteContainer(req.params.id);
            res.status(200).json({ message: 'Container deleted successfully' });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getContainers(req, res) {
        try {
            const containers = await ContainerService.getContainers();
            res.status(200).json(containers);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = new ContainerController();
