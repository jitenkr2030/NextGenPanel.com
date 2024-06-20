const express = require('express');
const router = express.Router();
const brandingController = require('../controllers/brandingController');

// Branding routes
router.get('/', brandingController.getAllBrandingSettings);
router.get('/:id', brandingController.getBrandingSettingById);
router.post('/', brandingController.createBrandingSetting);
router.put('/:id', brandingController.updateBrandingSetting);
router.delete('/:id', brandingController.deleteBrandingSetting);

module.exports = router;
