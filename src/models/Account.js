const CUENTA_CORRIENTE = "Cuenta corriente";
const CAJA_AHORRO = "Caja de ahorro";

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