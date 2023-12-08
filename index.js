const express = require('express');
const accountsRouter = require('./src/routes/AccountsRouter');
const transfersRouter = require('./src/routes/TransfersRoutes');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', accountsRouter);
app.use('/api', transfersRouter);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})