const express = require('express');
const router = express.Router();
const networkingController = require('../controllers/networkingController');

// Networking management routes
router.get('/', networkingController.getAllNetworkSettings);
router.get('/:id', networkingController.getNetworkSettingById);
router.post('/', networkingController.createNetworkSetting);
router.put('/:id', networkingController.updateNetworkSetting);
router.delete('/:id', networkingController.deleteNetworkSetting);

module.exports = router;
