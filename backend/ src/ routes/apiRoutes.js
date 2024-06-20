const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

// API management routes
router.get('/', apiController.getAllApis);
router.get('/:id', apiController.getApiById);
router.post('/', apiController.createApi);
router.put('/:id', apiController.updateApi);
router.delete('/:id', apiController.deleteApi);

module.exports = router;
