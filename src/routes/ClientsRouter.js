const express = require('express');
const router = express.Router();
const clientController = require('../controllers/ClientController');

router.get('/', clientController.getClients);
router.get('/:clientId', clientController.getClientById);

module.exports = router;