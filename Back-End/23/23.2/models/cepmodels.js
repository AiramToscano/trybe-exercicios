const connection = require('./connection')
const axios = require('axios');

const searchMysqlCep = async (cep) => {
    const query = "SELECT * FROM cep_lookup.ceps WHERE CEP = ?";
    const [searchCep] = await connection.execute(query, [cep]);
    return searchCep;
};



const create = async (cep, logradouro, bairro, localidade, uf) => {
    const query = "INSERT INTO cep_lookup.ceps (cep, logradouro, bairro, localidade,uf) VALUES (?, ?,?,?,?)";
    const [createcep] = await connection.execute(query,[cep, logradouro, bairro, localidade, uf]);
    return createcep;
}

const getapi = async(cep) => {
const api =  await axios.get(` https://viacep.com.br/ws/${cep}/json/`)
    return api.data
}

module.exports = {
    searchMysqlCep,
    create,
    getapi
}