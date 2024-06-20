const express = require('express');
const router = express.Router();
const cloudController = require('../controllers/cloudController');

// Cloud management routes
router.get('/', cloudController.getAllCloudSettings);
router.get('/:id', cloudController.getCloudSettingById);
router.post('/', cloudController.createCloudSetting);
router.put('/:id', cloudController.updateCloudSetting);
router.delete('/:id', cloudController.deleteCloudSetting);

module.exports = router;
