const express = require('express');
const router = express.Router();
const transferController = require('../controllers/TransferController');

router.get('/:clientId', transferController.getTransfersByClient);
router.post('/', transferController.performTransfer);

module.exports = router;