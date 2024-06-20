const express = require('express');
const router = express.Router();
const collaborationController = require('../controllers/collaborationController');

// Collaboration routes
router.get('/', collaborationController.getAllCollaborations);
router.get('/:id', collaborationController.getCollaborationById);
router.post('/', collaborationController.createCollaboration);
router.put('/:id', collaborationController.updateCollaboration);
router.delete('/:id', collaborationController.deleteCollaboration);

module.exports = router;
