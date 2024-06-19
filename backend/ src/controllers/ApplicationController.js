// src/controllers/ApplicationController.js
const ApplicationService = require('../services/ApplicationService');

class ApplicationController {
    async installApplication(req, res) {
        try {
            const app = await ApplicationService.installApplication(req.body);
            res.status(201).json(app);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async updateApplication(req, res) {
        try {
            const app = await ApplicationService.updateApplication(req.params.id, req.body);
            res.status(200).json(app);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async deleteApplication(req, res) {
        try {
            await ApplicationService.deleteApplication(req.params.id);
            res.status(200).json({ message: 'Application deleted successfully' });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getApplications(req, res) {
        try {
            const apps = await ApplicationService.getApplications();
            res.status(200).json(apps);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = new ApplicationController();
