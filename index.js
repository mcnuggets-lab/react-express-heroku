var express = require('express');
var path = require('path');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/tictactoe', function(request, response) {
  console.log("PATH: " + path.join(__dirname+'/tictactoe/build/index.html'));
  response.sendFile(path.join(__dirname+'/tictactoe/build/index.html'));
});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
