var mysql      = require('mysql');

//Establish connection
var connection = mysql.createConnection({
    port: 'localhost',
    user: 'root',
    password : 'Lfbet1233',
    database : 'form',
    socketPath:'/tmp/mysql.sock'
});

  connection.connect();

  //Table
  connection.query("CREATE TABLE Comments (comment VARCHAR(100))",
  function(err, result){
      if(err) {
          console.log(err);
      } else {
          console.log("Table Comments Created");
      }
  });

  connection.end();

  module.exports = connection;
