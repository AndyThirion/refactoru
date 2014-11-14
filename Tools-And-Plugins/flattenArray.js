// A function that can turn an array of arrays into one array containing all of the values
// 		Runs recursively to handle multiple level arrays without being told how deep they are
// Example:
// 
// var multiLevelArray = [
// 	[1,2,3],
// 	['a','b','c']
// ]
// 
// Running flattenArray(multiLevelArray) will return [1,2,3,'a','b','c']


// Accepts an array of arrays as input, returns the arrays flattened out
// Same functionality as _.flatten()
var flattenArray = function(arr) {

	// Validate our input
	// If it's not an array we want to return an error message
	if (!Array.isArray(arr)) {
		return "That is not an array, please try again.";
	}

	// Declare our temporary storage variable
	// We will add each array's contents into this array and then return it
	var tempArray = [];

	// Our for loop that will iterate over each array, checking if each index of the array
	// 	 contains an array or simply a value
	for (var i = 0; i < arr.length; i++) {
		// Check if arr[i] is an array
		//   if it is, recursively call flattenArray on it
		// 	 then add the results of flattenArray(arr[i]) to our temp storage
		//   using the next block of code
		if (Array.isArray(arr[i])) {
			tempArray = tempArray.concat(flattenArray(arr[i]))
		
		// If arr[i] isn't an array, treat it as a list of values and concatenate
		// 	  it onto our storage variable
		} else {
			tempArray.push(arr[i]);
		}
	}

	// Finally return the tempArray as our flattened array
	// This returns every time called recursively, giving us a multi-level
	//   array flattener
	return tempArray;
};


testArray1 = [
	['a', 'b', 'c', [1,2, 3]],
	["I'm a multi-level array", ", pretty cool, huh?"],
	{test: "obj"}
];

console.log(flattenArray(testArray1));


testArray2 = [
	['One deep', 1,
	[
		'Two deep', 2,
		[
			'Three deep', 3
		]
	]
	]
];


console.log(flattenArray(testArray2));