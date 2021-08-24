const mysql= require('mysql');


    const db = mysql.createConnection(
        {
        host: 'localhost',
        user:'Nefas',
        password:'NFJqlAuw7nFvgaRj',
       
        }
    )
    db.connect(err => {
        if (err){
        throw err;
    }
    console.log("u connected beyotch")
})




    