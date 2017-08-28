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

app.route('/tictactoe').get(function(request, response, next) {
    response.sendFile(path.join(__dirname, '/tictactoe/build/index.html'));
});

// app specific static files have to appear last, or they would invade the correct scope
app.use(express.static(__dirname + '/tictactoe/build'));

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
