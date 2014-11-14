var desserts = require('../models/desserts.js')

var apiController = {
	addDeser: function(req, res){
		// Pull out submitted form data
		var data = req.body;


		// We can just send the data back so user can
		// see raw form data
		// res.send(data);
		
		// Add our new dessert to the object
		deserts.push(data);

		// Send user back to the homepage
		res.redirect('/');
	}
};

module.exports = apiController;