// src/controllers/FileManagerController.js
const FileManagerService = require('../services/FileManagerService');

class FileManagerController {
    async uploadFile(req, res) {
        try {
            const file = await FileManagerService.uploadFile(req.files);
            res.status(201).json(file);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async deleteFile(req, res) {
        try {
            await FileManagerService.deleteFile(req.params.id);
            res.status(200).json({ message: 'File deleted successfully' });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getFiles(req, res) {
        try {
            const files = await FileManagerService.getFiles();
            res.status(200).json(files);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = new FileManagerController();
