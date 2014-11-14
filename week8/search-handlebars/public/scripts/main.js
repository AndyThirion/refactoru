$(document).ready(function(){

	
	// Search submission click handler
	$('#search-submit').on('click', function(e) {
		e.preventDefault();
		console.log($('#search-field').val())
		$.post('/search', {keyword: $('#search-field').val()}, function(resultData) {
			console.log(resultData)
			$('#search-field').val('')
			var template = $('#results-tpl').html();
			var templateFunction = Handlebars.compile(template);
			var outputHTML = templateFunction(resultData);
			$('.results').empty();
			$(outputHTML).appendTo('.results');
		})

	})

	// Handlebars Templating
	// 
	// Get handlebars template from results.html
	// var template = $('#results-tpl').html();
	// var templateFunction = Handlebars.compile(template);
	// var outputHTML = templateFunction();
	// $('.results').append(outputHTML)
	

})