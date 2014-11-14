var desserts = require('../models/desserts.js');

var indexController = {
	index: function(req, res) {
		// Pass a reference to jade that will
		// tell it what desserts means
		res.render('index', {
			desserts: desserts
		});
	},

	about: function(req, res) {
		// Render the about page
		res.render('about', {
			dessertCount: desserts.length
		});
	}
};

module.exports = indexController;