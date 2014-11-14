// Create our colorutil object by requiring/importing from colorutil.js
var colorutil = require('./colorutil.js');

// Create a variable luminosity to store the result of our luminosity calculation
var luminosity = colorutil.luminosity();

// Console Log the result
console.log(luminosity);

// Our darken function
var darkened = colorutil.darken();

// Log the result
console.log(darkened);