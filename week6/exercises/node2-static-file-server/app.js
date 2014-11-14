var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');

// Blocking version - we want to make it asynch
// var fileContents = fs.readFileSync('data.txt');



var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));


// Blocking and asynch versions of getting
// data.txt and putting it on the screen at
// home route

app.get('/', function(req, res) {
// 	// Blocking version - we want to make it asynch
// 	// res.header('Content-Type', 'text/html');
// 	// res.send(fileContents);
	
// 	// Asynch version -
// 	//   we put the readFile and header/send in here
// 	//   as a callback
// 	fs.readFile('./data.txt', function(err, data) {
// 		res.header('Content-Type', 'text/html');
// 		res.send(data);
// 	})
	
// 	// We don't need res.render since we are
// 	// using res.header and res.send - they do
// 	// the same thing, essentially
	console.log(req.params.filename);
	res.render('index');
});


// Bonus: Modifying route to allow user to
// request any file by name.
// Files will be read from public folder.
app.get('/:filename', function(req, res){
	fs.readFile(req.params.filename, function(err, data) {
		res.header('Content-Type', 'text/html');
		res.send(data);

	})
})


var server = app.listen(7000, function() {
	console.log('Express server listening on port ' + server.address().port);
});
