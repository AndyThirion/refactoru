var indexController = {
	index: function(req, res) {
		res.render('index');
	},
	
	getNumber: function(req, res) {
		// Use count if specified, otherwise
		// default to 1 number
		var count = req.query.count || 1;

		if(count === 1){
			res.send({
				number: Math.random()* 100
			})
		} else {
			var numArray = [];
			for (var i = 0; i < count; i++) {
				numArray.push({
					number: Math.random() * 100
				})
			}
		res.send(numArray);

		}
	}
};

module.exports = indexController;