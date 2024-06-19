// src/controllers/BackupController.js
const BackupService = require('../services/BackupService');

class BackupController {
    async createBackup(req, res) {
        try {
            const backup = await BackupService.createBackup(req.body);
            res.status(201).json(backup);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async restoreBackup(req, res) {
        try {
            await BackupService.restoreBackup(req.params.id);
            res.status(200).json({ message: 'Backup restored successfully' });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getBackups(req, res) {
        try {
            const backups = await BackupService.getBackups();
            res.status(200).json(backups);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = new BackupController();
