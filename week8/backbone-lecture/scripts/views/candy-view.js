var CandyView = Backbone.View.extend({
	template: Handlebars.compile($('#candy-tpl').html()),
	render: function(){
		this.setElement(this.template(this.model.toJSON()));
	},

	events: {
		'click .remove-candy': 'removeCandy'
	},

	removeCandy: function(e) {
		this.model.collection.remove(this.model);
	}
});