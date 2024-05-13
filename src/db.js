const mysql = require('mysql');
const variables = require('./config/variables.config');

const connection = mysql.createConnection({
    host: variables.var.DB_HOST,
    user: variables.var.DB_USER,
    password: variables.var.DB_PASS,
    database: variables.var.DB_NAME
});

connection.connect((error) => {
    if(error){
        console.log(`Error ending the database connection: `, error.message);
        connection.end()
    }else{
        console.log(`Successful in connecting to a database: ${variables.var.DB_NAME}`);
    }
});

module.exports = connection;