var countries = require('../models/countries.json');

var indexController = {
	index: function(req, res) {
		res.render('index');
	},
	countries: function(req, res) {
		res.send(countries);
	},
	search: function(req, res) {
		// Search the list of countries
		// for any that match the search term
		
		// Create an array to hold our matched countries
		var countriesMatched = []
		// Iterate through the list of countries and 
		// add each one to the array
		for (var i = 0; i < countries.length; i++)
		{
			if (countries[i].name.toLowerCase() == req.body.country.toLowerCase())
			{
				countriesMatched.push(countries[i])
			}
		}
		res.send(countriesMatched);
		// res.send(req.body);
	}
};

module.exports = indexController;