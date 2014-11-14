// Problem Set 6

// Exercise 1
// 
// Write a function secondGreatLow that takes a single array of numbers and returns the second lowest and second greatest numbers separated by a space.
// 	ex:  [7,7,12,98, 106] should return 12 98
// 	Array will contain at least 2 numbers

var secondGreatLow = function(arr) {
	// Underscore's sortBy automatically sorts an array by
	// lowest to highest values
	// var sorted = _.sortBy(arr)
	// 
	// We return the 2nd and 2nd to last values
	// return sorted[1] + ' ' + sorted[sorted.length - 2]
	
	// All on one line for fun
	return _.sortBy(arr)[1] + ' ' + _.sortBy(arr)[_.sortBy(arr).length - 2]
}

console.log(secondGreatLow([3,6,0,9,2,54,23]))
console.log(secondGreatLow([0,1]));



// Exercise 2
// 
// 