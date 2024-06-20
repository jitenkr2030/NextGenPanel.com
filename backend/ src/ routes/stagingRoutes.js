const express = require('express');
const router = express.Router();
const stagingController = require('../controllers/stagingController');

// Staging environment routes
router.get('/', stagingController.getAllStagingEnvironments);
router.get('/:id', stagingController.getStagingEnvironmentById);
router.post('/', stagingController.createStagingEnvironment);
router.put('/:id', stagingController.updateStagingEnvironment);
router.delete('/:id', stagingController.deleteStagingEnvironment);

module.exports = router;
