/*
	Write a separate program that takes a color and returns 'light' if the luminosity is greater than 155 and 'dark' otherwise.
 */

// Get the luminosity of a color from its RGB 255 values
var luminosity = function() {
	// Get our RGB from their command line entry
	var r = process.argv[2];
	var g = process.argv[3];
	var b = process.argv[4];

	// Return the luminosity
	return 0.2126*r + 0.7152*g + 0.0722*b;

}

console.log(luminosity());

var isLight = function(lum) {
	if (lum > 155)
	{
		return 'light';
	}
	else
	{
		return 'dark';
	};
};

console.log(isLight(luminosity()));