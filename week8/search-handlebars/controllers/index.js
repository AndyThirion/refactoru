
var data = require('../models/search-data.json')

var indexController = {
	index: function(req, res) {
		res.render('index');
	},
	search: function(req, res) {
		
		console.log("Submission:", req.body.keyword);

		// Check if the submitted term matches
		// any keys in data.programming
		for (key in data.programming) {
			if (key.toLowerCase() == req.body.keyword.toLowerCase())
			{
				console.log(data.programming[key].desc)
				res.send({name: key, desc: data.programming[key].desc});
			}
		}
		console.log("END");
	}
};

module.exports = indexController;