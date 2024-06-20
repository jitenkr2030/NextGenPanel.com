const express = require('express');
const router = express.Router();
const webServerController = require('../controllers/webServerController');

// Web server management routes
router.get('/', webServerController.getAllWebServers);
router.get('/:id', webServerController.getWebServerById);
router.post('/', webServerController.createWebServer);
router.put('/:id', webServerController.updateWebServer);
router.delete('/:id', webServerController.deleteWebServer);

module.exports = router;
