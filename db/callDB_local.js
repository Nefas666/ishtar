const mysql= require('mysql');


    const db = mysql.createConnection(
        {
        host: 'localhost',
        user:'ishtar_1',
        password:'segretissima',
        database:'ishtar'
       
        }
    );
    db.connect(err => {
        if (err){
        return console.error('error: ' + err.message)
    }
    console.log("u connected beyotch")
});

module.exports = db




    