var names = ['Chris', 'Raine', 'Sean', 'Dorian', 'Ben'];
var locations = ['Class', 'Retreat', 'Baby', 'Class', '???'];


var printnNames = function() {
	for (vai i = 0; i < names.length; i++) {
		console.log(names[i] + 'says hi!');
	};
};

// This won't work - locations will over write names
//module.exports = names;
//module.exports = locations;

//This will work
module.exports = {
	names: names,
	locations: locations,
	printNames: printNames
};