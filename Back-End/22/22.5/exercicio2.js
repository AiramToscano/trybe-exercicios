const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
// const joi = require('joi');

const app = express();
app.use(bodyParser.json());

app.listen(3000, () => {
    console.log('Aplicação ouvindo na porta 3000');
  }); // 3

const verficToken = (req, res, next) => {
     const { token } = req.headers;
if(token.length < 12) return res.status(401).json({ message: "invalid token" });
next()
}

const getApi = async (req, res, next) => {
  const api =  await axios.get(' https://api.coindesk.com/v1/bpi/currentprice/BTC.json')
  return res.status(202).json(api.data)
}

app.get('/btc/price', verficToken, getApi)

