const express = require('express');

const app = express();

app.listen(3001, () => {
    console.log('Aplicação ouvindo na porta 3001');
  }); // 3

app.get('/ping', (req, res) => {
 res.status(200).jsonp({message: 'pong'});
})