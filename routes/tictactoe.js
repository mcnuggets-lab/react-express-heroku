var express = require('express');
var path = require('path');
var router = express.Router();

router.get('/', function(request, response, next) {
    response.sendFile(path.join(__dirname, '../tictactoe/build/index.html'));
});

router.get('/static/:filename', function(request, response, next) {
    response.sendFile(path.join(__dirname, '../tictactoe/build/static', request.params.filename));
});

router.get('/static/css/:filename', function(request, response, next) {
    response.sendFile(path.join(__dirname, '../tictactoe/build/static/css', request.params.filename));
});

router.get('/static/js/:filename', function(request, response, next) {
    response.sendFile(path.join(__dirname, '../tictactoe/build/static/js', request.params.filename));
});

module.exports = router;
