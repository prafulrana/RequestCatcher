var app = require('express')();

app.get('/', function(req, res){
  res.send('Hello World');
});

app.use(require('express-bunyan-logger')());

app.listen(8080);



