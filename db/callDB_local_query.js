let mysql = require('mysql');

let connection =mysql.createConnection(
    {
        host: 'localhost',
        user:'ishtar_1',
        password:'segretissima',
        database:'ishtar',
       
        });

let sql = 'SELECT url FROM viol_vid';

connection.query(sql, (error, results, fields)=>{
    if(error){
        return console.error(error.message);
    }
    console.log(results);
});

