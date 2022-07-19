const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3001;
const {isValid, isValidpassword, 
  create, getAll, findById, UpdateById} = require('./models/cadastro')
const {verifcCampos, isValidpassword1} = require('./middlewares/index')

app.listen(port, () => console.log(`listening on port ${port}`));

app.use(bodyParser.json());

app.post('/user', async(req, res) => {
  const {firstName, lastName, email , password} = req.body;
  isValid(firstName,lastName, email, password);
  if(!isValid(firstName, lastName, email, password)) return res.status(401)
  .json({error: true, message: "todos os campos são obrigatorios"});
  if(!isValidpassword(password)) return res.status(401)
  .json({error: true, message: "o campo password deve ter pelo menos 6 caracteres"});
  await create(firstName, lastName, email, password)
  const obj = {
      id: 1,
      firstName, 
      lastName,
      email
  }
 return res.status(201).json(obj)
})

app.get('/user', async (_req, res) => {
const clientes = await getAll();
if(clientes.length < 1) return res.status(200).json([])
res.status(200).json(clientes);
})

app.get('/user/:id', async (req, res) => {
    const { id } = req.params;
    const cliente = await findById(id);
    if (!cliente) return res.status(404).json({message: 'Not found'});
    return res.status(200).json(cliente);
  })

  app.put('/user/:id',verifcCampos, isValidpassword1, async (req, res) => {
   const {id} = req.params;
   const {email,firstName} = req.body;
   await UpdateById(id, email,firstName);
   const resultCliente = await findById(id);
   if(resultCliente === null) return res.status(404).json({ message: 'Usuario não encontrado' })
   res.status(200).json(resultCliente);
  })
