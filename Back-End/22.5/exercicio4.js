const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs/promises');
// const axios = require('axios');
const joi = require('joi');


const app = express();
app.use(bodyParser.json());

app.listen(3100, () => {
    console.log('Aplicação ouvindo na porta 3100');
  }); // 3

const verifyName = (req, _res, next) => {
    const {name} = req.body;
    if(name.length < 5) return next({ statusCode: 400, message: 'invalid data' });
    next()

}
const verifyInitials = (req, _res, next) => {
    const {initials} = req.body;
    const INITIALSSCHEMA = joi.object({
        initials: joi.string().required().uppercase().max(3),
      })
     const teste = INITIALSSCHEMA.validate({initials: initials}, { convert: false });
     const {error} = teste;
    if(error) return next({ statusCode: 400, message: 'invalid data' });
    next()

}
const verifycountry = (req, _res, next) => {
    const {country} = req.body;
    if(country.length <= 3) return next({ statusCode: 400, message: 'invalid data' });
    next()

}

const read = async (req, res, _next) => {
    const {name, initials, country, leage} = req.body
    const obj = {name, initials, country, leage}
    fs.appendFile('./teams.json', JSON.stringify(obj))
  return res.status(201).json(obj);
}

async function getTimestxt() {
    const vet = []
    const teste = await fs.readFile('./teams.json', 'utf-8')
    const teste1 = teste.split('{')
    // console.log(teste1);
    for(let i = 1; i < teste1.length; i++) {
         vet.push(teste1[i])
    }
    const teste22 = vet.map((e) => JSON.parse(e.replace('','{')))
//    console.log(teste22);
   return teste22
  }

const getTimes = async(req, res, next) => {
    // const teste = getSimpsons();
    // console.log(teste)
    const times = await getTimestxt();
    if(times.length === 0) return res.status(200).json({ statusCode: 200, teams: '[]' });
    return res.status(200).json(times);
}

const errorMiddleware = (err, req, res, next) => {

    return res.status(err.statusCode).json({ message: err.message })
     }

app.post('/teams',verifyName, verifyInitials,verifycountry,read)
app.get('/teams', getTimes)
// app.use('*',routNotFound) // qualquer rota nao encontrada
app.use(errorMiddleware);