var express = require('express');
var app = express();

app.set('views', './views');
app.set('view engine', 'jade');

// Create our get for home
// Create our route, second param is handler (what to do)
app.get('/', function(req, res){
	// Don't want to just send file,
	// You want jade files to be compiled
	res.render('index');
})

// Tells the webserver to listen to port 3000
app.listen(3000);
console.log('Server listening on localhost:3000');
