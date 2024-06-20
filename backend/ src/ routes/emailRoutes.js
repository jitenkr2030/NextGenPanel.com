const express = require('express');
const router = express.Router();
const emailController = require('../controllers/emailController');

// Email management routes
router.get('/', emailController.getAllEmails);
router.get('/:id', emailController.getEmailById);
router.post('/', emailController.sendEmail);
router.delete('/:id', emailController.deleteEmail);

module.exports = router;
