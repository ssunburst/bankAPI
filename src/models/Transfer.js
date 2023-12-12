let i = 1;

class Transfer {
    constructor(client, sourceAccount, destinationAccount, amount) {
        if (sourceAccount.balance < amount)
            throw new Error("Insufficient funds.");
        if (sourceAccount.client === destinationAccount.client) {
            if (client != sourceAccount.client)
                throw new Error("Client does not own both accounts given.");
            if (sourceAccount == destinationAccount) {
                throw new Error("Cannot transfer to the same account");
            }
            this.id = i++;
            this.client = client;
            this.sourceAccount = sourceAccount;
            this.destinationAccount = destinationAccount;
            this.amount = amount;
            this.timestamp = new Date();
            sourceAccount.balance -= +amount;
            destinationAccount.balance += +amount;
        }
        else {
            throw new Error("Accounts do not belong to the same client.");
        }
    }
}

module.exports = {Transfer};