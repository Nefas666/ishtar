const mysql= require('mysql');


    const db = mysql.createConnection(
        {
        host: '89.46.111.188',
        user:'Sql1574223',
        password:'#N3f4AS!666',
        database:'Sql1574223_1',
        connectTimeout:30000
       
        }
    )


    db.connect(err => {
        if (err)
            
        throw err;
        console.log('u suck')
    
    
})




    