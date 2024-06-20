const express = require('express');
const router = express.Router();
const supportController = require('../controllers/supportController');

// Support management routes
router.get('/', supportController.getAllSupportTickets);
router.get('/:id', supportController.getSupportTicketById);
router.post('/', supportController.createSupportTicket);
router.put('/:id', supportController.updateSupportTicket);
router.delete('/:id', supportController.deleteSupportTicket);

module.exports = router;
