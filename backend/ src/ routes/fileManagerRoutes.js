const express = require('express');
const router = express.Router();
const fileManagerController = require('../controllers/fileManagerController');

// File manager routes
router.get('/', fileManagerController.getAllFiles);
router.get('/:id', fileManagerController.getFileById);
router.post('/', fileManagerController.uploadFile);
router.put('/:id', fileManagerController.updateFile);
router.delete('/:id', fileManagerController.deleteFile);

module.exports = router;
