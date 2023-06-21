const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Servidor back-end funcionando!');
});

app.listen(port, () => {
    console.log(`Servidor está executando na porta ${port}`);
});