$(document).on('ready', function() {

	// Our array of wishlist titles
	var wishlist = []
	$('#wishlist-add-button').on('click', function(e){
		$('.product').one('click', function(e){
			// Check if the title is already in wishlist
			var title = $(this).find('h1').text();

			for (var i = 0; i < wishlist.length; i++)
			{
				// console.log(addTitle);
				// console.log(wishlist[i].title);
				if(wishlist[i].title == title)
				{
					return false
				}
			}
			wishlist.push({
				title: title
			});

			// Clear wishlist
			$('#wishlist').empty();
			// Render new wishlist
			var wishlistHTML = wishlist.map(function(product){
				var outputHTML = wishlistTemplateFunction(product);
				$(outputHTML).appendTo('#wishlist')
			});
			// If so, return false and exit the function
			// If not add it to wishlist
			// May need to re-render the wishlist template to
			// 	show new entry
		})
	})

	$(document).on('click', '.wishlist-add-button', function(e) {
		var title = $(this).siblings('h1').text();

		for (var i=0; i<wishlist.length; i++)
		{
			if (wishlist[i].title == title)
			{
				return false
			}
		};
		wishlist.push({
			title: title
		});

		$('#wishlist').empty();

		var wishlistHTML = wishlist.map(function(product){
			var outputHTML = wishlistTemplateFunction(product);
			$(outputHTML).appendTo('#wishlist')
		});
	});

	$(document).on('click', '.wishlist-remove-button', function(e){
		var title = $(this).siblings('h3').text();

		for (var i = 0; i < wishlist.length; i++) {
			if (wishlist[i].title == title) {
				wishlist.splice(i, 1);
			}
		};

		$('#wishlist').empty();

		var wishlistHTML = wishlist.map(function(product){
			var outputHTML = wishlistTemplateFunction(product);
			$(outputHTML).appendTo('#wishlist')
		});
	})
  
	// Grab html template from #handlebars-template div
	var productTemplate = $('#product-list-template').html();
	// Create a template function to compile template
	var productTemplateFunction = Handlebars.compile(productTemplate);
	// Create HTML output for each product in the list by mapping
	// over the productsList array inside the productsData object
	var productHTML = productsData.productsList.map(function(product){
		var outputHTML = productTemplateFunction(product);
		// Append each result to the #product-container div
		$(outputHTML).appendTo('#product-container')
	});

	var wishlistTemplate = $('#wishlist-template').html();
	var wishlistTemplateFunction = Handlebars.compile(wishlistTemplate);
	// var wishlistHTML = wishlist.map(function(product){
	// 	var outputHTML = wishlistTemplateFunction(product);
	// 	$(outputHTML).appendTo('#wishlist')
	// });



	// $(wishlistHTML).appendTo('#wishlist')
	
});