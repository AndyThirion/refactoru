var http = require('http');


//  req, res
var handleRequests = function(req, res) {
	console.log('Request came in.');

	// respond to the request
	res.writeHead(200, {
		'Content-Type': 'text/plain'
	});

	// Tell the browser that it
	// should close the conection
	// after recieving the data in "end"
	res.end('Hello, you requested ' + req.url);
};

var server = http.createServer(handleRequests);


// Tells the server to start listening for new info
server.listen(3000);
console.log('Server running on port 3000');