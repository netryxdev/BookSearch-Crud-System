const mysql = require('mysql')

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',  // insira sua senha do MySQL aqui
    database: 'nodemysql2',
})

module.exports = pool