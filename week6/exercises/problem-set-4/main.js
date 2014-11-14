//Ex 1
// 	Write addNumbers() that takes a single string parameter and searches for all the numbers in the string, then adds them together.


var addNumbers = function(str) {
	
	// Our result variable
	var result = 0;
	var temp = '';

	for (var i = 0; i < str.length; i++) {
		
		if (!!parseInt(str[i], 10) || str[i] === '0')
		{
			temp += str[i];
		}
		
		else
		{
			result += Number(temp);
			temp = '';
		}

	}
	result += Number(temp);

	return result;
}


// console.log(addNumbers('044Hello22 Muddafuck4'));
// console.log(addNumbers('1H2E3L4L5O'));


// Ex. 2
// Write a function longestWord that takes a single string parameter and returns the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length.

var longestWord = function(str) {
	var longest = '';
	var words = str.split(' ');
	var lettersOnly = []
	for (var i = 0; i < words.length; i++)
	{
		for (var j = 0; j < words[i].length; j++)
		{
			(words[i][j].toLowerCase() === words[i][j].toUpperCase()) ? null : lettersOnly.push(words[i][j])
		}
		words[i] = lettersOnly.join('');
		lettersOnly = [];
		if (words[i].length > longest.length) {
			longest = words[i];
		}
	}
	return longest;
}

// console.log(longestWord("Mom made me eat my M@&M's"));


// Ex. 3
// 	Write a function averageStringNumbers that takes a single string parameter and searches for all the numbers in the string, adds them toether, then returns that final numbers divided by the total amountof letters in the string.


var averageStringNumbers = function(str) {
	var numbers = [];
	var result = 0;
	var letters = 0
	for (var i = 0; i < str.length; i++)
	{
		parseInt(str[i]) ? numbers.push(Number(str[i])) : null;
		(str[i].toLowerCase() != str[i].toUpperCase()) ? letters++ : null
	}

	for (var i = 0; i < numbers.length; i++)
	{
		result += numbers[i];
	}

	result /= letters;
	result%1 < .5 ? result = Math.floor(result) : result = Math.ceil(result);
	console.log(result);
}

averageStringNumbers("Hello6 9World 2, Nic8e D7ay!");







