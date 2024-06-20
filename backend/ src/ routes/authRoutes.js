const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// User authentication routes
router.post('/login', authController.login);
router.post('/register', authController.register);
router.post('/logout', authController.logout);
router.post('/reset-password', authController.resetPassword);

module.exports = router;
