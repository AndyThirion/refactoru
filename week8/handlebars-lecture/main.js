$(document).on('ready', function() {
  
	// var templateSource = $('#demo-template').html();
	// console.log(templateSource)

	// // Have handlebars compile this source info
	// // into a reusable template function
	// // compile takes in 1 argument - string compile source
	// // 		also called context
	// var templateFunction = Handlebars.compile(templateSource);

	// console.log(templateFunction);

	// // Define a context to be used
	// // in the generation step below
	// var data = {
	// 	name: 'Andy',
	// 	favoriteJS: 'Vanilla Javascript',
	// 	bookPick: 'Wheel of Time series',
	// 	opacity: true,
	// 	snacks: ['granola bar', 'muffin', 'quinoa', 'gooey ganja balls']
	// };

	// // Use the template to generate new HTML content
	// var outputHTML = templateFunction(data);
	// console.log(outputHTML);

	// // Append the output HTML to the page
	// $('.container').append(outputHTML);


	// // Reuse the templateFunction to render another person
	// var data2 = {
	// 	name: 'John Smith',
	// 	favoriteJS: 'PhaserJS',
	// 	bookPick: 'The Bible',
	// 	opacity: false,
	// 	schedule: {
	// 		morning: 'Do nothing',
	// 		evening: 'Continue doing nothing'
	// 	}
	// }

	// var johnOutput = templateFunction(data2);

	// $(johnOutput).appendTo('.container')
	
	// Friends bringing stuff to party
	//  ex:
	//  	Chris:
	//  		-spoon
	//  		-himself
	//  		-a hat
	//  	Max:
	//  		-groundhogs
	//  		-nude a capella
	//  		-jelly
	
	var guests = [
		{
			name: 'Chris',
			bringing: ['a spoon', 'himself', 'a hat']
		},
		{
			name: 'Max',
			bringing: ['groundhogs', 'nude a capella', 'jelly']
		},
		{
			name: 'Andy',
			bringing: ['only fear']
		}
	]

	var template = $('#demo-template').html();
	console.log(template)

	var templateFunction = Handlebars.compile(template);

	var output = templateFunction(guests);
	console.log(output)

	$(output).appendTo('.container');




});