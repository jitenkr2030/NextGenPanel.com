const express = require('express');
const router = express.Router();
const databaseController = require('../controllers/databaseController');

// Database management routes
router.get('/', databaseController.getAllDatabases);
router.get('/:id', databaseController.getDatabaseById);
router.post('/', databaseController.createDatabase);
router.put('/:id', databaseController.updateDatabase);
router.delete('/:id', databaseController.deleteDatabase);

module.exports = router;
