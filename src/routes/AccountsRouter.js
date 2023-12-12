const express = require('express');
const router = express.Router();
const accountController = require('../controllers/AccountController');

router.get('/', accountController.getAccounts);
router.get('/:clientId', accountController.findAccountsByClient);
router.get('/:clientId/:accountNumber', accountController.findAccount);

module.exports = router;