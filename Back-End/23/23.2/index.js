const express = require('express');
const bodyParser = require('body-parser');
const { ping, validCep, createValidCep, createCepData } = require('./controllers/cep')


const app = express();

app.use(bodyParser.json());


const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});

app.get('/ping',ping)
app.get('/cep/:cep',validCep)
app.post('/cep', createValidCep, createCepData)