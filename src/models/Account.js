const CUENTA_CORRIENTE = 0;
const CAJA_AHORRO = 1;

class Account {
    constructor(id, client, type, balance) {
        this.id = id;
        this.client = client;
        this.type = type;
        this.balance = balance;
    }
}

module.exports = {
    CUENTA_CORRIENTE,
    CAJA_AHORRO,
    Account
}