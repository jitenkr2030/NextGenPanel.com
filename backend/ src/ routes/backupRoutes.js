const express = require('express');
const router = express.Router();
const backupController = require('../controllers/backupController');

// Backup management routes
router.get('/', backupController.getAllBackups);
router.get('/:id', backupController.getBackupById);
router.post('/', backupController.createBackup);
router.put('/:id', backupController.updateBackup);
router.delete('/:id', backupController.deleteBackup);

module.exports = router;
