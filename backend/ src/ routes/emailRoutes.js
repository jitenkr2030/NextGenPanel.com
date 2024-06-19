// src/routes/emailRoutes.js
const express = require('express');
const router = express.Router();
const EmailController = require('../controllers/EmailController');

router.get('/', EmailController.getEmailAccounts);
router.post('/', EmailController.createEmailAccount);
router.delete('/:id', EmailController.deleteEmailAccount);

module.exports = router;
