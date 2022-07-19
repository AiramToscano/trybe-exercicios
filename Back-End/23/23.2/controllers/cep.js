const { formatCep, createCep, createValidCep, formatApi } = require('../services/cepservices')

const ping = (_req, res) => {
    res.status(200).json({message: "pong funcionou!"})
}
const validCep = async (req, res,_next) => {
    try {
    const { cep } = req.params
    const cepregex = /\d{5}-?\d{3}/;
    if(!cepregex.test(cep)) return res.status(400).json({error: "invalidData", message:"CEP inválido"})
    const service = await formatCep(cep);
    if(service === undefined){ 
        const apiCep = await formatApi(cep)
        apiCep.cep === undefined ? res.status(404).json(apiCep) : res.status(200).json(apiCep)
    }
    return  res.status(200).json(service);
    }catch(e){
        console.error(e)
    }
}


const createCepData = async (req, res) => {
    try {
    const {cep, logradouro, bairro, localidade, uf} = req.body;
    const validCep = createValidCep(cep, logradouro, bairro, localidade, uf);
    if(validCep !== undefined) return res.status(400).json({ "error": { "code": "invalidData", "message": validCep } })
    const formatCepValid = cep.replace('-', '');
    const verificExists = await formatCep(formatCepValid)
    if(verificExists !== undefined) return res.status(409).json({  "error": { "code": "alreadyExists", "message": "CEP já existente" }});
    await createCep(formatCepValid, logradouro, bairro, localidade, uf)
    const cepCreate = await formatCep(formatCepValid)
    return res.status(200).json(cepCreate)
    }catch (e) {
        console.error(e)
    }
}

module.exports = {
    ping,
    validCep,
    createValidCep,
    createCepData
}