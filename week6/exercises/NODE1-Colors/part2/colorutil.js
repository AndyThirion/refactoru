
// Declare our luminosity finding function
var luminosity = function() {
	// Get our RGB from their command line entry
	var r = process.argv[2];
	var g = process.argv[3];
	var b = process.argv[4];

	// Return the luminosity
	return 0.2126*r + 0.7152*g + 0.0722*b;

}

/**
 * Returns RGB values decreased by 20%
 * @return {array} RGB inputs decreased by 20%
 */
var darken = function(){
	var r = process.argv[2];
	var g = process.argv[3];
	var b = process.argv[4];

	return r*0.8 +' '+g*0.8 +' '+ b*0.8;
}


// Export our function as a method on colorutil object
module.exports = {
	luminosity: luminosity,
	darken: darken
};