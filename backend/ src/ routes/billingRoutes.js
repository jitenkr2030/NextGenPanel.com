const express = require('express');
const router = express.Router();
const billingController = require('../controllers/billingController');

// Billing management routes
router.get('/', billingController.getAllBillingSettings);
router.get('/:id', billingController.getBillingSettingById);
router.post('/', billingController.createBillingSetting);
router.put('/:id', billingController.updateBillingSetting);
router.delete('/:id', billingController.deleteBillingSetting);

module.exports = router;
