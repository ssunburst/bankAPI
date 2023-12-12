const express = require('express');
const cors = require('cors');
const accountsRouter = require('./src/routes/AccountsRouter');
const transfersRouter = require('./src/routes/TransfersRoutes');
const clientsRouter = require('./src/routes/ClientsRouter');
const app = express();
const port = 8000;

app.use(cors({
  origin: ['http://localhost:3000'], // Allow requests from this origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allowed request headers
  credentials: true, // Allow cookies to be sent with requests
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/clients', clientsRouter);
app.use('/api/accounts', accountsRouter);
app.use('/api/transfers', transfersRouter);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})