var BagView = Backbone.View.extend({
	template: Handlebars.compile($('#bag-tpl').html()),
	// More complicated render
	// Want to grab all of the views in collection
	// Want to make sure view updates every time any models are changed
	initialize: function() {
		// Render the default element
		this.setElement(this.template(this.attributes));

		// Listen for any changes to our collection and re-render
		// This is a backbone method
		// Whenever something happens to this.collect ('all' events)
		// call this.render to redraw the templated elements
		this.listenTo(this.collection, 'all', this.render);
	},

	// Events
	// Event name, what you want to happen
	events: {
		'submit form': 'addCandy',
		// Can do syntax of
		// event <space> selector
		// Is there a way to pass an argument to this method?
	},

	

	addCandy: function(e) {
		e.preventDefault();
		var name = this.$('[name=name]').val();
		var newCandy = new Candy({
			name: name
		});

		this.collection.add(newCandy);
		this.$('[name=name]').val('');
	},

	render: function() {
		// Map over the collection
		var candyItems = this.collection.map(function(candyItem) {
			var candyView = new CandyView({
				model: candyItem
			});

			// jQuery .append() can take in an array and append
			// them all in one shot
			candyView.render();
			return candyView.el;
		});

		// Append the rendered collection of HTML dom elements
		
		// This says "inside the template find the ul element"
		// clear our whatever is currently in the list
		// then append our new list of candyItems
		this.$('ul').empty().append(candyItems);
	}
})