const connection = require('./connection');

const isValid = (firstName,lastName, email, password ) => {
    if(firstName === '' || firstName === undefined) return false;
    if(lastName === '' || lastName === undefined) return false;
    if(email === '' || email === undefined) return false;
    if(password === '' || password === undefined) return false;
    return true;
};

const isValidpassword = (password) => {
 if(password.length < 6) return false;
 return true;
}

const restruct = (data) => {
 const obj = { 
     id: data.id,
     FirstName: data.first_name,
     LastName: data.last_name,
     Email: data.email,

 }
 return obj
}

const create = async (firstName, lastName, email, password) => connection.execute(
    'INSERT INTO bancos_airam.authors (first_name, last_name, email, password) VALUES (?,?,?,?)',
    [firstName, lastName, email, password],
);

const getAll = async () => {
    const [clientes] = await connection.execute('SELECT * FROM authors')
    return clientes.map(restruct);
}

const findById = async (id) => {
    const query = "SELECT * FROM authors WHERE id = ?"
    const [clientes] = await connection.execute(query, [id]) // perguntar o pq dessa destruturaçao
    if (clientes.length === 0) return null;
    return clientes.map(restruct);

}

const UpdateById = async (id,email,name) => {
    const query = `UPDATE authors SET email = ?, first_name = ? WHERE id = ?`
    const [clientes] = await connection.execute(query, [email,name,id]) // perguntar o pq dessa destruturaçao
    if (clientes.length === 0) return null;
    return clientes;

}
module.exports = {
    isValid,
    isValidpassword,
    create,
    getAll,
    findById,
    UpdateById
}