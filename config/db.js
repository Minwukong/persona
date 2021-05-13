const mysql = require("mysql");

const db = mysql.createConnection({
    host: 'nodejs-008.cafe24.com',
    user: 'sbschang',
    password: 'cc62273776!',
    database: 'sbschang',
    port:'3306',
});

db.connect();

module.exports = db;