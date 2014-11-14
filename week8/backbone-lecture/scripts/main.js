// Create a new CandyBag collection and autopopulate it with
// 	new candy models
var candyBag = new CandyBag([
	new Candy({name: 'KitKat', calories: 5000}),
	new Candy({name: 'Nerds', calories: 1000, isPoisoned: true}),
	new Candy({name: 'Twix', calories: 10})
]);

// Initialize a bagView, pass it the attribute
// title for the h1 in our bag-tpl in index.html
var bagView = new BagView({
	collection: candyBag,
	attributes: {
		title: 'My Candy Bag'
	}
})

$(document).on('ready', function() {
  // When the document is ready
  // append our view
  $('.container').append(bagView.el)
  bagView.render()
});