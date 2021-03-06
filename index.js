var express = require('express'),
	http = require('http'),
	path = require('path');
var app = express();
var port = process.env.PORT || 4000;

app.set('view engine', 'ejs');

app.use("/static", express.static(__dirname + '/static'));

app.get('/query', function(req, res) {
    console.log("Serve actual request");
    console.log(req.query);
    res.render('query.ejs', { query: req.query });
});

app.get('/display', function(req, res) {
    console.log("Show URL that can be used");
    console.log(req.query);
    let text = "https://picktwt.herokuapp.com/query?url=" + encodeURIComponent(req.query.url) + 
	'&image_url=' + encodeURIComponent(req.query.image_url) + 
	'&title=' + encodeURIComponent(req.query.title) + 
	'&image_alt=' + encodeURIComponent(req.query.image_alt) +
	'&description=' + encodeURIComponent(req.query.description);
    req.query.link = text; 
    res.render('display.ejs', { query: req.query });
});

app.get('/', function(req, res) {
    console.log("Main page");
    res.render('index.ejs');
});

app.listen(port);
