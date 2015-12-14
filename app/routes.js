module.exports = function(app) {

  app.get('/', function(req, res) {
    res.sendFile('./public/index.html]');
  });

  app.post('/',function(req,res){
    console.log(req.body.comment);
  })

};