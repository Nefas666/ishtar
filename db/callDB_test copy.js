  
  const Connection = require('tedious').Connection;

  const config = {
    server:'62.149.153.42',
    authentication:{
      type:'default',
      options:{
        userName: 'MSSql203423',
        password: 'k#tuAYPSNPHXaacL$Hkz%y$0'

      }
    },
    options:{
      encrypt:false, 
      database: 'viol_vid',
      enableArithAbort:true,
      connectionTimeout:150000,
      pool:
      {
        max:100, 
        min:0,
        idleTimeoutMillis:30000,
  
      }
    }
  };

  const connection = new Connection(config);
  connection.on('connect', function(err)
  {
    console.log('u in babe')
  })

  connection.connect();