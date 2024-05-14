const express = require('express');
const DBConnection = require('./db/connection');
const routes = require('./routes/routes');

const PORT = process.env.PORT || 3000;
const app = express();

DBConnection();

app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
    console.log(`Aplicação rodando na porta ${PORT}`);
});
