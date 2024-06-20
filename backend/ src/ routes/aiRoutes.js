const express = require('express');
const router = express.Router();
const aiController = require('../controllers/aiController');

// AI management routes
router.get('/', aiController.getAllAiSettings);
router.get('/:id', aiController.getAiSettingById);
router.post('/', aiController.createAiSetting);
router.put('/:id', aiController.updateAiSetting);
router.delete('/:id', aiController.deleteAiSetting);

module.exports = router;
