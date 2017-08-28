var express = require('express');
var path = require('path');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// add your routings here
var tictactoe = require('./routes/tictactoe');

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
    response.render('pages/index');
});

app.use('/tictactoe', tictactoe);

/*app.get('/tictactoe', function(request, response, next) {
    response.sendFile(path.join(__dirname, '/tictactoe/build/index.html'));
});*/

//app.use(express.static(__dirname + '/tictactoe/build'));

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
