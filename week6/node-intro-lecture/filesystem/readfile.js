var fs = require('fs');

var fileContent = fs.readFileSync('file1.txt', 'utf-8');

console.log(fileContent)