// This is Client Side only

$(function(){

	// Event handler for clicks on update-numbers button
	$('#update-numbers').on('click', function(e){
		// We want to append whatever number comes back from AJAX function
		// getNumber
		$.get('/getNumber', {}, function(resultData){
			// received data from the server here
			console.log(resultData);

			// Append the generated number from getNumber
			// onto our page
			$('#numbers').append('<li>' + resultData.number + '</li>');
		});
	});

	// Event handler for clicks on update-numbers button
	$('#update-numbers-five').on('click', function(e){
		// We want to append whatever number comes back from AJAX function
		// getNumber
		$.get('/getNumber', {count: 5}, function(resultData){
			// received data from the server here
			for (var i = 0; i < resultData.length; i++) {
				$('#numbers').append('<li>' + resultData[i].number + '</li>');
			}
		});
	});
});