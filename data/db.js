const { Account, CUENTA_CORRIENTE, CAJA_AHORRO } = require('../src/models/Account'); 
const { Client } = require('../src/models/Client');
const { Transfer } = require('../src/models/Transfer');

const clients = [];
let i = 1;
clients.push(new Client(i++, "Marcelo Gallardo"));
clients.push(new Client(i++,"Leo Mengui"));
clients.push(new Client(i++, "Sergio Massa"));
clients.push(new Client(i++, "Marcelo Bielsa"));
clients.push(new Client(i++, "Mario Pimpinella"));
clients.push(new Client(i++, "María Marta Serralima"));
clients.push(new Client(i++, "Genaro Guerrero"));
clients.push(new Client(i++, "Maicol Yonson Gonsales"));

const accounts = [];
i = 1;
accounts.push(new Account(i++, clients[2], CUENTA_CORRIENTE, 50000));
accounts.push(new Account(i++, clients[0], CUENTA_CORRIENTE, 300));
accounts.push(new Account(i++, clients[3], CAJA_AHORRO, 450000));
accounts.push(new Account(i++, clients[1], CAJA_AHORRO, 5678));
accounts.push(new Account(i++, clients[4], CAJA_AHORRO, 10));
accounts.push(new Account(i++, clients[3], CAJA_AHORRO, 15));
accounts.push(new Account(i++, clients[6], CAJA_AHORRO, 4000));

const transfers = [];
i = 1;
transfers.push(new Transfer(clients[3], accounts[2], accounts[5], 100));
transfers.push(new Transfer(clients[3], accounts[2], accounts[5], 100));
transfers.push(new Transfer(clients[3], accounts[2], accounts[5], 100));
transfers.push(new Transfer(clients[3], accounts[2], accounts[5], 100));
transfers.push(new Transfer(clients[3], accounts[2], accounts[5], 100));
transfers.push(new Transfer(clients[3], accounts[2], accounts[5], 100));

module.exports = {
    clients,
    accounts,
    transfers
}






