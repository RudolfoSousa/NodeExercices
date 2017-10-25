var mysql  = require('mysql');

function createDBConnection() {
    return mysql.createConnection({
       host: "localhost",
            port: '3300',
            user: "root",
            password : "1234",
            database: "casadocodigo"
    });
}
module.exports = function(){
	return createDBConnection;
}