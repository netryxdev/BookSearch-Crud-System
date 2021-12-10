const mysql = require('mysql')

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '25011999',
    database: 'nodemysql2',
})

module.exports = pool