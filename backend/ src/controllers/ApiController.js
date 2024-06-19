// src/controllers/ApiController.js
const ApiService = require('../services/ApiService');

class ApiController {
    async createApi(req, res) {
        try {
            const api = await ApiService.createApi(req.body);
            res.status(201).json(api);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async updateApi(req, res) {
        try {
            const api = await ApiService.updateApi(req.params.id, req.body);
            res.status(200).json(api);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async deleteApi(req, res) {
        try {
            await ApiService.deleteApi(req.params.id);
            res.status(200).json({ message: 'API deleted successfully' });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getApis(req, res) {
        try {
            const apis = await ApiService.getApis();
            res.status(200).json(apis);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = new ApiController();
