var Person = function() {
	this.name = 'Andy';
	this.hobbies = ['reading', 'MMA', 'Tinder'];
	this.printHobbies = function() {
		console.log(this.hobbies.join(', '));
	};
}


var Celebrity = function() {
	Person.call(this)
	// this.printHobbies = function() {
	// 	console.log('They aren\'t real people, they don\'t have hobbies');
	// }
}

Celebrity.prototype = new Person()
Celebrity.prototype.constructor = Celebrity;

var andy = new Person();

var milaKunis = new Celebrity();

andy.printHobbies();

$(document).on('ready', function() {
  
});