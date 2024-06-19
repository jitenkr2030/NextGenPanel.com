// src/controllers/DomainController.js
const DomainService = require('../services/DomainService');

class DomainController {
    async addDomain(req, res) {
        try {
            const domain = await DomainService.addDomain(req.body);
            res.status(201).json(domain);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async updateDomain(req, res) {
        try {
            const domain = await DomainService.updateDomain(req.params.id, req.body);
            res.status(200).json(domain);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async deleteDomain(req, res) {
        try {
            await DomainService.deleteDomain(req.params.id);
            res.status(200).json({ message: 'Domain deleted successfully' });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getDomains(req, res) {
        try {
            const domains = await DomainService.getDomains();
            res.status(200).json(domains);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = new DomainController();
