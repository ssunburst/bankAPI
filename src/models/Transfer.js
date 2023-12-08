class Transfer {
    constructor(client, sourceAccount, destinationAccount, amount) {
        if (sourceAccount.balance < amount)
            throw new Error("Insufficient funds.");
        if (sourceAccount.client === destinationAccount.client) {
            if (client != sourceAccount.client)
                throw new Error("Client does not own both accounts given.");
            this.client = client;
            this.sourceAcount = sourceAccount;
            this.destinationAccount = destinationAccount;
            this.amount = amount;
            sourceAccount.balance -= +amount;
            destinationAccount.balance += +amount;
        }
        else {
            throw new Error("Accounts do not belong to the same client.");
        }
    }
}

module.exports = {Transfer};