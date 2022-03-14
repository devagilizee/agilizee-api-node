const express = require('express');
const routes = express.Router();

function execSQLQuery(sqlQry, res){
    var mysql = require('mysql');
    var connection = mysql.createConnection({
      host : '177.66.169.207',
      //host : 'localhost',
      port : '3306',
      user : 'agilizee_admin',
      password : 'IKNTIBe7t7-s',
      database : 'agilizee_api'
    });

    connection.query(sqlQry, function(err, result){
        console.log(err, result)
        res.send(result)
    }).on('error', function(err) {
        console.log("[mysql error]",err);
    });

    connection.end();
}

routes.get('/', (req, res) => {
    execSQLQuery('SELECT * FROM produtos', res);
})

module.exports = routes;