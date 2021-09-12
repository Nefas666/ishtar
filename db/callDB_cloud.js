const mysql= require('mysql');


    const db = mysql.createConnection(
        {
        host: '212.237.39.73',
        user:'ish_tar',
        password:'#N3f4AS!6',
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




    