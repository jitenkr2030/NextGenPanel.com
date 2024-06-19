// src/controllers/EmailController.js
const EmailService = require('../services/EmailService');

class EmailController {
    async createEmailAccount(req, res) {
        try {
            const account = await EmailService.createEmailAccount(req.body);
            res.status(201).json(account);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async deleteEmailAccount(req, res) {
        try {
            await EmailService.deleteEmailAccount(req.params.id);
            res.status(200).json({ message: 'Email account deleted successfully' });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getEmailAccounts(req, res) {
        try {
            const accounts = await EmailService.getEmailAccounts();
            res.status(200).json(accounts);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = new EmailController();
