var express = require('express');
var bodyParser = require('body-parser');

// require our controller object
var indexController = require('./controllers/index.js');
var apiController = require('./controllers/api.js');


var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({extended: false}));

// Routing
// Home Page
app.get('/', indexController.index);
// About Page
app.get('/about', indexController.about);

// Routing for our API
app.post('/dessertSubmit', apiController.addDesert);


var server = app.listen(7980, function() {
	console.log('Express server listening on port ' + server.address().port);
});
