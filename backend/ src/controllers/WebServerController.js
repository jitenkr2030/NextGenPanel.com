// src/controllers/WebServerController.js
const WebServerService = require('../services/WebServerService');

class WebServerController {
    async createWebServer(req, res) {
        try {
            const server = await WebServerService.createWebServer(req.body);
            res.status(201).json(server);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async updateWebServer(req, res) {
        try {
            const server = await WebServerService.updateWebServer(req.params.id, req.body);
            res.status(200).json(server);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async deleteWebServer(req, res) {
        try {
            await WebServerService.deleteWebServer(req.params.id);
            res.status(200).json({ message: 'Web server deleted successfully' });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getWebServers(req, res) {
        try {
            const servers = await WebServerService.getWebServers();
            res.status(200).json(servers);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = new WebServerController();
