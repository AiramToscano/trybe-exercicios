const { searchMysqlCep, create } = require('../models/cepmodels')
const joi = require('joi');

const searchCep = async (cep) => {
    const [model] = await searchMysqlCep(cep);
  return model
}

const formatCep = async (cep) => {
const searchcep = await searchCep(cep);
if(searchcep === undefined) return searchcep
const index = searchcep.cep
const teste2 = [];
const teste = index.split('');
teste.forEach((e,index) => {
     if(index === 4) return teste2.push(e,'-')
     teste2.push(e);
})
const cepstring = teste2.toString();
const cepreplace = cepstring.replace(/,/g, '')
const obj = { 
    cep: cepreplace,
    logradouro: searchcep.logradouro,
    bairro: searchcep.bairro,
    localidade: searchcep.localidade,
    uf: searchcep.uf,
}
return obj;

}

const createValidCep = (cep, logradouro, bairro, localidade, uf) => {
    const CEPSCHEMA = joi.object({
        cepValid: joi.string().required().pattern(new RegExp(/\d{5}-\d{3}/)),
        logradouroValid:joi.string().required(),
        bairroValid:joi.string().required(),
        localidadeValid:joi.string().required(),
        ufValid:joi.string().required(),
      });
      const teste = CEPSCHEMA.validate({ 
          cepValid: cep,
          logradouroValid: logradouro,
          bairroValid: bairro,
          localidadeValid: localidade,
          ufValid: uf,
        });
        // console.log(teste)
      const { error } = teste;
       if (error) { 
       return  error.message;
       }
}

const createCep = async (cep, logradouro, bairro, localidade, uf) => {
 const createData = await create(cep, logradouro, bairro, localidade, uf)
 return createData
}

module.exports = {
    formatCep,
    createCep,
    createValidCep
}