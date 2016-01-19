
module.exports = function(app) {
  var connection = require('../db.js');

  app.get('/', function(req, res) {
    res.sendFile('index.html');
    // var query = connection.query('SELECT * FROM Comments');
  });

  app.post('/',function(req,res){
    console.log(req.body.comment)
    var comment = {comment: req.body.comment}
    // var query = connection.query('INSERT INTO Comments SET ?',comment,function(err,result){
    // });
  })

};