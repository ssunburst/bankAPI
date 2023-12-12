const { response } = require('express');
const {accounts} = require('../../data/db');

function getAccounts(req, res) {
    return res.json(accounts);
}

function findAccountsByClient(req, res) {
    const clientId = req.params.clientId;
    const clientAccounts = accounts.filter(account => account.client.id == clientId);
    return res.json(clientAccounts);
}

function findAccount(req, res) {
    const accountNumber = req.params.accountNumber;
    const clientId = req.params.clientId;
    const clientAccount = accounts.find(account => (account.client.id == clientId && account.id == accountNumber));
    return res.json(clientAccount);
}

module.exports = {
    getAccounts,
    findAccountsByClient,
    findAccount
}