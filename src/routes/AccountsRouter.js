const express = require('express');
const router = express.Router();
const accountController = require('../controllers/AccountController');

router.get('/accounts/:clientId', accountController.findAccountsByClient);
router.get('/accounts/:clientId/:accountNumber', accountController.findAccount);

module.exports = router;