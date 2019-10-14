// Configuration for the mysql database server that will be connected to.
const mysql = require('mysql');

// Example config for localhost, change according to dev environment
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: '[db-name]'
});

connection.connect();

// Export the MYSQL connection instance for reuse in the controller logics.
module.exports = {
    connection: connection
};
