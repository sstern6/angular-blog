var mysql      = require('mysql');

//Establish connection
var connection = mysql.createConnection({
    port: 'localhost',
    user: 'root',
    password : '',
    database : 'node',
    socketPath:'/tmp/mysql.sock'
});

  connection.connect();

  //Table
  connection.query("CREATE TABLE Comments (name VARCHAR(100), comment VARCHAR(100))",
  function(err, result){
      if(err) {
          console.log(err);
      } else {
          console.log("Table Comments Created");
      }
  });

  connection.end();

  module.exports = connection;
