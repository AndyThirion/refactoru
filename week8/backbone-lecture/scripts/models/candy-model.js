// Extends a class from the default backbone model
var Candy = Backbone.Model.extend({
	// Set some defaults
	defaults: {
		name: '',
		calories: 0,
		isPoisoned: false
	}
});