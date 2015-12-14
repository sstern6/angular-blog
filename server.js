var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
// var methodOverride = require('method-override');
var port = process.env.PORT || 8080; // set our port

// MySQL
var mysql      = require('mysql');

//Establish connection
var connection = mysql.createConnection({
    port: 'localhost',
    user: 'root',
    password : 'Lfbet1233',
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


// ???????
// get all data/stuff of the body (POST) parameters
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users

// routes ==================================================
require('./app/routes')(app); // configure our routes

// start app ===============================================
app.listen(port);                   // startup our app at http://localhost:8080
console.log('Starting sever on port ' + port);       // shoutout to the user
exports = module.exports = app;             // expose app
