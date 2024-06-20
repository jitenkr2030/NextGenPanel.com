const express = require('express');
const router = express.Router();
const migrationController = require('../controllers/migrationController');

// Migration routes
router.get('/', migrationController.getAllMigrations);
router.get('/:id', migrationController.getMigrationById);
router.post('/', migrationController.createMigration);
router.put('/:id', migrationController.updateMigration);
router.delete('/:id', migrationController.deleteMigration);

module.exports = router;
