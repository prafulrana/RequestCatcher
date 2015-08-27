var app = require('express')();

app.use(require('express-bunyan-logger')());

app.get('/', function(req, res){
  res.send('Hello World');
});
app.post('/', function(req, res){
  res.send('Hello World');
});



app.listen(80);



