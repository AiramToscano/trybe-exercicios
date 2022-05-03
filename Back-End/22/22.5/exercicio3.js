const express = require('express');
const bodyParser = require('body-parser');
// const axios = require('axios');
// const joi = require('joi');

const app = express();
app.use(bodyParser.json());

app.listen(3001, () => {
    console.log('Aplicação ouvindo na porta 3001');
  }); // 3

const posts = [
    { 
    id: "1" , 
    name: "Airam"
    },
    { 
    id: "2" , 
    name: "Aira"
    },
    { 
    id: "3" , 
    name: "Keite"
    },
];

const verifyId = (req, res, next) => {
 const { id } = req.params;
     const verific = posts.find((e) => e.id === id)
     if(!verific) return next({ statusCode: 404, message: 'post not found' });
     return res.status(200).json(verific)


}

const getpost = (req, res, next) => {
  
        if(posts.length === 0) return res.status(200).json({posts: []});
        return res.status(201).json(posts);
}

const routNotFound = (req, res, next) => {
    next({ statusCode: 404, message: 'Opsss router not found' });
}

const errorMiddleware = (err, req, res, next) => {


 return res.status(err.statusCode).json({ message: err.message })
  }

  app.get('/posts', getpost)
  app.get('/posts/:id', verifyId)
  app.use('*',routNotFound) // qualquer rota nao encontrada
  app.use(errorMiddleware);
  
