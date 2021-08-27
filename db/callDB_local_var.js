let mysql = require('mysql');
let fs = require('fs')


let connection =mysql.createConnection(
    {
        host: 'localhost',
        user:'ishtar_1',
        password:'segretissima',
        database:'ishtar',
       
        });

let queryString = 'SELECT url FROM viol_vid';
connection.connect(function(err){
    if (err) throw err;
});

let resultArray = [];
function setValue (value){
    resultArray =value;
}

connection.query(queryString, (err, rows, fields)=>{
    if (err) throw err;
        else{
            setValue(rows);
            console.log(JSON.stringify(resultArray));
            resArr();
        }
});


function resArr(){
    const resArr = JSON.stringify(resultArray)

    fs.writeFileSync('data.json.2', resArr);
}

module.exports.resArr = resArr;