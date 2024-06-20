const express = require('express');
const router = express.Router();
const securityController = require('../controllers/securityController');

// Security routes
router.get('/', securityController.getSecuritySettings);
router.put('/', securityController.updateSecuritySettings);

module.exports = router;
