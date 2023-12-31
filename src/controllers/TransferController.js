const {accounts, transfers, clients} = require('../../data/db');
const { Transfer } = require('../models/Transfer');


function performTransfer(req, res) {
    const postData = req.body;
    const clientId = postData.client;
    const sourceAccountNumber = postData.source;
    const destinationAccountNumber = postData.dest;
    const transferAmount = postData.amount;
    if (clientId && sourceAccountNumber && destinationAccountNumber && transferAmount) {
        const sourceAccount = accounts.find(account => account.id == sourceAccountNumber);
        const destinationAccount = accounts.find(account => account.id == destinationAccountNumber);
        const transferClient = clients.find(client => client.id == clientId);
        if (sourceAccount && destinationAccount && transferClient) {
            try {
                const newTransfer = new Transfer(transferClient, sourceAccount, destinationAccount, transferAmount);
                transfers.push(newTransfer);
                return res.json(newTransfer);
            }
            catch(e) {
                return res.status(422).json({
                    error: e.message
                });
            }
        }
        else {
            return res.status(404).json({
                error: "Alguna de las cuentas ingresadas o el cliente indicado no existe."
            })
        }
    }
    else {
        return res.status(400).json({
            error: "Faltan datos."
        })
    }
}

function getTransfersByClient(req, res) {
    const {amount} = req.query;
    const clientId = req.params.clientId;
    const clientTransfers = transfers.filter(transfer => transfer.client.id == clientId).reverse();
    const mappedTransfers = clientTransfers.map(transfer => {
        const {client, ...rest} = transfer;
        rest.timestamp = rest.timestamp.toLocaleString();
        return rest;
    })
    if (amount) {
        const slicedTransfers = mappedTransfers.slice(0, +amount);
        return res.json(slicedTransfers);
    }
    return res.json(mappedTransfers);
}

module.exports = {
    getTransfersByClient,
    performTransfer
}