const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    user:'root',
    password:'mariakeite92',
    host: 'localhost',
    database: 'bancos_airam'
})

module.exports = connection;