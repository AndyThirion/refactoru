// PROBLEM SET 3

// EX. 1
// 	 Write a function palindrome that takes a single string parameter and returns true if the parameter is a palindrom - otherwise returns false

var palindrome = function (str) {
	// Remove any spaces from our string
	var strNoSpace = str.split(' ').join('')

	// For as many letters as are in our string
	for (var i = 0; i < strNoSpace.length; i++) {

		// Check if the letter at [i] and [last - i] are the same
		// If they are not the same return false
		if (!(strNoSpace[i] == strNoSpace[strNoSpace.length - i - 1])) {
			return false
		}
	}
	// If we got here then every letter matches
	// So return true
	return true
};

// console.log(palindrome('never odd or even'));

// console.log(palindrome("racecar"));

// EX. 2
//   Write a function dashInsert that takes a single num parameter and returns the num with inserted dashes between adjacent odd digits


var dashInsert = function(num) {
	
	// Convert our numbers to a string
	//  since that's what we'll be returning
	var numString = num.toString();
	// console.log(numString);

	// Declare an array to hold the modified string
	//   This is what will be converted into a string
	//   and returned
	var result = '';

	// For each number in our string
	for (var i = 0; i < numString.length; i++) {

		// Check if current number +2 is the same as the next number
		// And is also not 0 (since 0 is neither odd or even)
		if (Number(numString[i]) + 2 == numString[i + 1] && numString[i] !== '0') {
			
			// Add current number AND a dash to our result
			result += (numString[i] + '-');

		// Or if current number is 9 and next number is 3
		} else if (numString[i] == 9 && numString[i + 1] == 3) {
			
			// Add current number AND a dash to our result
			result += numString[i] + '-'
		
		// Otherwise
		} else {

			// Add just the number to our result
			result += numString[i]
		}
	}

	// Pass back our result
	return result;
};

// console.log(dashInsert(12345));
// console.log(dashInsert(13579));
// console.log(dashInsert(454793));


// EX 3
//   Write a function caesarCipher that takes a string and number parameter and performs a Cesar Cipher shift on it using the num parameter as the shifting number. A Caesar Cipher works by shifting each letter in the string N places down in the alphabet.


var caesarCipher = function(str, num) {

	// Initialize result - this will be returned by the function
	var result = '';

	// New variable to hold our num
	// This way if it is larger than 26 we can convert it
	var shiftNum = num;

	// An array to give us numerical index for all letters
	var letterArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

	// If we're trying to shift by more than 26 spaces
	if (shiftNum >= 26) {
		
		// Reduce it to < 26
		shiftNum %= 26;
	}

	// Declare our function that will take in a letter
	// and return the "number" of that letter
	// var shift = function(letter) {
	// 	letterArray.findIndex()
	// };


	// For each letter in our string
	result = str.split('').map(function(letter) {
		for (var i = 0; i < letterArray.length; i++) {
			if (letter == letterArray[i]) {
				if (shiftNum + i >= 25)
					shiftNum -= 25
				return letterArray[i + shiftNum]
			}
		}
	}).join('');

		// Shift it forward by shiftNum letters

	
	return result
}

console.log(caesarCipher('ffff', 23));



// $(document).on('ready', function() {
  
// });