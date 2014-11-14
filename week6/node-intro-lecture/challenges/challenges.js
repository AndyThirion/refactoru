
// Write an application that copies a text file

//eg node copy.js source.txt destination.txt


var fs = require('fs');

var copyJS = function(input, output) {
	var fileContent = fs.readFileSync(input, 'utf-8');
	fs.writeFileSync(output, fileContent);
	console.log(fileContent);
}

copyJS(process.argv[2], process.argv[3])

// copyJS(process.argv[2], process.argv[3])
// 
// var sourceFileName = process.argv[2];
// var destinationFileName = process.argv[3];

// var sourceFileContents = fs.readFileSync(sourceFileName, 'utf-8')


// console.log(sourceFileName, destinationFileName);
// console.log(sourceFileContents);


/*
 Bonus: Concat
 write an application that concatenates any number of files together without using the built-in appendFile method.

 eg node concat.js output.txt input1.txt input2.txt input3.txt

*/