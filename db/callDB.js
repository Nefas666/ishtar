function callDB (id, callback) {
    const result;
    const connection = mysql.createConnection(
        {
        host: '62.149.153.42',
        user:'MSSql203423',
        password:'k#tuAYPSNPHXaacL$Hkz%y$0',
        database:'viol_vid'
        }
    );
    connection.connect();
    const qString ='SELECT name FROM viol_vid WHERE id = 1';

    connection.query(qString, function(err, rows, fields) {
        if (err) throw err;

        for(var i in rows) {
            result = rows[i].name;
        }

        connection.end();
        callback (result);
    });
}