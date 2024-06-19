// src/controllers/CollaborationController.js
const CollaborationService = require('../services/CollaborationService');

class CollaborationController {
    async createProject(req, res) {
        try {
            const project = await CollaborationService.createProject(req.body);
            res.status(201).json(project);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getProjects(req, res) {
        try {
            const projects = await CollaborationService.getProjects();
            res.status(200).json(projects);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = new CollaborationController();
