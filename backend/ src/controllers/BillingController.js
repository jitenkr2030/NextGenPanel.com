// src/controllers/BillingController.js
const BillingService = require('../services/BillingService');

class BillingController {
    async createInvoice(req, res) {
        try {
            const invoice = await BillingService.createInvoice(req.body);
            res.status(201).json(invoice);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getInvoices(req, res) {
        try {
            const invoices = await BillingService.getInvoices();
            res.status(200).json(invoices);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async processPayment(req, res) {
        try {
            const payment = await BillingService.processPayment(req.body);
            res.status(200).json(payment);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = new BillingController();

