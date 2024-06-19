// src/controllers/SupportController.js
const SupportService = require('../services/SupportService');

class SupportController {
    async createTicket(req, res) {
        try {
            const ticket = await SupportService.createTicket(req.body);
            res.status(201).json(ticket);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getTickets(req, res) {
        try {
            const tickets = await SupportService.getTickets();
            res.status(200).json(tickets);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = new SupportController();
