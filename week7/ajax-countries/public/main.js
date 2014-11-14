$(document).ready(function() {

	// Click handler for Ajax Countries button
	$('#load-countries').on('click', function(e){

		// ajax request to /countries
		$.get('/countries', function(resultData){
			// This request will return countries.json
			// We set countries = to our country object list
			var countries = resultData;
			var el = $('<ul></ul>');
			$(el).appendTo($('body'));
			for (var country in countries) {
				$('<li>'+countries[country].name+'</li>').appendTo(el);
			};
		});
	});

	// Click handler for country search button
	$('#country-search-button').on('click', function(e){
		// Stop the button from actually submitting the data
		e.preventDefault();

		// Send the input data to /search and do stuff with it
		$.post('/search', {country: $('#country-search-field').val()}, function(resultData){
			var el = $('<ul></ul>');
			// $(el).addClass('text-info')
			$(el).appendTo('.countries-matched')
			for (var i = 0; i < resultData.length; i++)
			{
				$('<li>'+resultData[i].name+'</li>').appendTo(el);
			}
			console.log('resultData:', resultData);
		})
	})
});