const express = require('express');
const router = express.Router();
const ecommerceController = require('../controllers/ecommerceController');

// Ecommerce routes
router.get('/', ecommerceController.getAllEcommerceSettings);
router.get('/:id', ecommerceController.getEcommerceSettingById);
router.post('/', ecommerceController.createEcommerceSetting);
router.put('/:id', ecommerceController.updateEcommerceSetting);
router.delete('/:id', ecommerceController.deleteEcommerceSetting);

module.exports = router;
