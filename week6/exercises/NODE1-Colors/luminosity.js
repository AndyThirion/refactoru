/*
	Write a program that takes a color and returns the luminosity of that color using the following formula:

	luminosity = 0.2126*r + 0.7152*g + 0.0722*b

	It should take each RGB color component as a separate command line argument. They can be accessed with process.argv[num]
 */

var luminosity = function() {
	// Get our RGB from their command line entry
	var r = process.argv[2];
	var g = process.argv[3];
	var b = process.argv[4];

	// Return the luminosity
	return 0.2126*r + 0.7152*g + 0.0722*b;

}

console.log(luminosity());

