const express = require('express');
const routes = express.Router();

function execSQLQuery(sqlQry, res){
    var mysql = require('mysql');
    var connection = mysql.createConnection({
      host : '177.66.169.207',
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
    execSQLQuery('SELECT fantasia FROM clientesAgilizee', res);
})

routes.post('/add', (req, res) => {
    const body = req.body;

    if(!body){
        return res.status(400).end()
    }

    db.push(body)
    return res.json(body)

})

routes.delete('/:id', (req, res) => {
    const id = req.params.id;

    let newDB = db.filter(item => {
        if(!item[id])
          return item
    })

    db = newDB;

    return res.send(newDB);
})

module.exports = routes;