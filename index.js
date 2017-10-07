var express = require('express'),
	http = require('http'),
	path = require('path');
var app = express();

app.set('view engine', 'ejs');

app.get('/query', function(req, res) {
	console.log(req.query.picture);
//    res.sendFile(path.join(__dirname + '/index.html'));
    res.render('index.ejs', { query: req.query });
});

app.listen(4000);
