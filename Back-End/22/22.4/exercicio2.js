const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());


app.listen(3032, () => {
    console.log('Aplicação ouvindo na porta 3005');
  }); // 3


  app.post('/hello', (req, res) => {
    const { name } = req.body;
    return res.status(200).json({message: `Hello, ${name}!` });
  })

  // app.post('/greetings', (req, res) => {
  //   const { name, age } = req.body;
  //   if (age > 17) return res.status(200).json({message: `Hello, ${name}!` });
  //   return res.status(401).json({message: `Não autorizado` });
  // })

  app.put('/users/:nome/:idade', function (req, res) {
    const { nome, idade } = req.params;

     return res.status(200).json({ message: `Seu nome é ${nome} e sua idade é ${idade}` });
  
  });
