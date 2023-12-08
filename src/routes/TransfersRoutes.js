const express = require('express');
const router = express.Router();
const transferController = require('../controllers/TransferController');

router.get('/transfers/:clientId', transferController.getTransfersByClient);
router.post('/transfers', transferController.performTransfer);

module.exports = router;