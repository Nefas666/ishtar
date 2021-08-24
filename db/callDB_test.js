  const sql = require("mssql");

  const connection = {
    host: "62.149.153.42",
    port:1433,
    user: "MSSql203423",
    password: "k#tuAYPSNPHXaacL$Hkz%y$0",
    database: "viol_vid", 
    options: 
    {
      enableArithAbort:true,
    },
    connectionTimeout:150000,
    pool:
    {
      max:100, 
      min:0,
      idleTimeoutMillis:30000,

    },

  };
  sql.on('error', err =>{
    console.log(err.message)
  });

  async function getDBUsersAsyncFunction(){
    try{
      let pool = await sql.connect(connection)
      let resp1 = await pool
      .request()
      .query('select * from viol_vid')
      console.log(resp1.recordset[0]);
      sql.close()
    }
    catch (error){
      console.log(err.message)
      sql.close
    }
  }
