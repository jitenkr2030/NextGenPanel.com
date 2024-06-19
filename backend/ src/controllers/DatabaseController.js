// src/controllers/DatabaseController.js
const DatabaseService = require('../services/DatabaseService');

class DatabaseController {
    async createDatabase(req, res) {
        try {
            const db = await DatabaseService.createDatabase(req.body);
            res.status(201).json(db);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async deleteDatabase(req, res) {
        try {
            await DatabaseService.deleteDatabase(req.params.id);
            res.status(200).json({ message: 'Database deleted successfully' });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getDatabases(req, res) {
        try {
            const dbs = await DatabaseService.getDatabases();
            res.status(200).json(dbs);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = new DatabaseController();
