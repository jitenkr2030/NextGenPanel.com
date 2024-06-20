const express = require('express');
const router = express.Router();
const resellerController = require('../controllers/resellerController');

// Reseller management routes
router.get('/', resellerController.getAllResellers);
router.get('/:id', resellerController.getResellerById);
router.post('/', resellerController.createReseller);
router.put('/:id', resellerController.updateReseller);
router.delete('/:id', resellerController.deleteReseller);

module.exports = router;
