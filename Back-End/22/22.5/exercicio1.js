const express = require('express');
const bodyParser = require('body-parser');
const joi = require('joi');

const app = express();
app.use(bodyParser.json());

app.listen(3000, () => {
    console.log('Aplicação ouvindo na porta 3000');
  }); // 3

const verifyUsername = (req, res, next) => {
  const { name } = req.body

  const PASSWORDSCHEMA = joi.object({
    name: joi.string().required().min(3).max(8),
  })
 const teste = PASSWORDSCHEMA.validate({name: name})
 const {error} = teste;
  if( error ) return res.status(400).json({"message": "invalid data" })
  next()
}

const verifyEmail = (req, res, next) => {
    const { email } = req.body
  
    const EMAILSCHEMA = joi.object({
      email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    })
   const teste = EMAILSCHEMA.validate({email: email})
   const {error} = teste;
    if( error ) return res.status(400).json({"message": "invalid data" })
    next()
  }

  const verifyPassword = (req, res, next) => {
    const { password } = req.body
  
    const EMAILSCHEMA = joi.object({
      password: joi.string().pattern(new RegExp('^[1-9]{4,8}$')),
    })
   const teste = EMAILSCHEMA.validate({password: password})
   const {error} = teste;
    if( error ) return res.status(400).json({message: "invalid data" })
    next()
  }

  function geraStringAleatoria(_req, res, _next) {
    let stringAleatoria = '';
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 12; i++) {
        stringAleatoria += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return res.status(200).json({token: stringAleatoria})
}

app.post('/user/register', verifyUsername, verifyEmail, verifyPassword)
app.post('/user/login', verifyEmail, verifyPassword, geraStringAleatoria)

