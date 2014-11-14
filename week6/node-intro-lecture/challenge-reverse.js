/*

	Write a node app that takes in
	a string from the command line arguments
	reverses it, and then prints it back to the
	user

 */



var str = process.argv.slice(2).join(' ');

var tempVar = [];
for (i = str.length - 1; i >= 0; i--)
{
	tempVar.push(str[i]);
}

tempVar = tempVar.join('');

console.log(tempVar);