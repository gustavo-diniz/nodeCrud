var mysql = require('mysql');

function createDbConnection(){
    return mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'gds1903',
        database:'DB_NODE_TEST'
    });
}

module.exports = function () {
    return createDbConnection;
}
