
const express = require('express');
const conn =express();
const server =conn.listen(5500);


server.on('connection', function(socket){
    console.log("a new connection started rn");
    socket.keepAliveTimeout(60000);
});

const mysql= require('mysql');
    const connection = mysql.createConnection(
        {
        host: '62.149.153.42',
        user:'MSSql203423',
        password:'k#tuAYPSNPHXaacL$Hkz%y$0'
        }
    );
    connection.connect(function(err)
    
    {
        if(err) {
            console.error('error connecting: ' + err.stack);
            return;
        }
        console.log('connected as id ' + connection.threadId);
    });

