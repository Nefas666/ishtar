const Client = require('mysql').Client;
const client = new Client();
client.host= '62.149.153.42';
client.user = 'MSSql203423';
client.password = 'k#tuAYPSNPHXaacL$Hkz%y$0';

console.log("connection...");
client.connect(function(err,results)
{
  if(err){

 
  console.log("ERROR: "+err.message);
  throw err;
}
console.log("connected.");
clientConnected(client);

});

clientConnected = function(client)
{
  tableHasData(client);
}

tableHasData = function(client)
{
  client.query(
    'SELECT * FROM viol_vid',
    function selectCb(err, results,fields){
      if(err)
      {
        console.log("ERROR: " + err.message);
        throw err;
      }
      console.log("Got "+results.lenght+"Rows:");
      for (let i in results){
        console.log(results[i]);
        console.log('\n');

      }
    }
  );
};


