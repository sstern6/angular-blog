
module.exports = function(app) {
  var connection = require('../db.js');

  app.get('/', function(req, res) {
    res.sendFile('./public/index.html');
  });

  app.post('/',function(req,res){
    var comment = {comment: req.body.comment}
    var query = connection.query('INSERT INTO Comments SET ?',comment,function(err,result){
    });
  })

};