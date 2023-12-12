const { clients } = require("../../data/db")

function getClients(req, res) {
    return res.json(clients);
}

function getClientById(req, res) {
    const clientId = req.params.clientId;
    const client = clients.find(client => client.id == clientId);
    if (client)
        return res.json(client);
    else
        return res.status(404).json({
            error: "No such client."
    })
}

module.exports = {
    getClients,
    getClientById
}