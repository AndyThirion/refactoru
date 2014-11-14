// Class constructor
// Taking in a name for any person we create

var Person = function(name){
	this.name = name;
};


// Render function for each person
// this person instance
// @return {jQuery} jQuery DOM element
// this.element will hold all of the things that can be appended to the page
Person.prototype.render = function(){
	// if the element property already exists, just return it
	if (this.element) 
		return this.element

	// If the element property does NOT exist,
	// generate a new element and store it inside
	// the object as the element property
	this.element = $('<h4>' + this.name + '</h4>');

	// Creating an event handler on this element
	// Is this technically a delegated event?
	// If not how is it easily able to handle dynamically
	// 	 generated and inserted HTML?
	this.element.on('click', function() {
		console.log('Click:', this);
	})
	return this.element;
}

// Class constructor for Building
var Building = function(name) {
	// Name of the building
	this.name = name;

	// An array to hold on to referenes of all people
	// 	  in this building
	this.people = [];
}


// Transfer a person from one building to another
Building.prototype.transferPerson = function(name, building) {
	var foundPeople;
	// Look through each person in the building
	for (var i = 0; i < this.people.length; i++) {
		// If their name is equivalent to the name argument
		if(this.people[i].name === name) {
			// Remove the person from the building
			foundPeople = this.people.splice(i, 1);
			// console.log(foundPeople);
			break;
		}
	}
	// If we found a person
	if(foundPeople){
		// foundperson will be an array of all people who have been removed from this building
		var actualPerson = foundPeople[0];
		console.log(actualPerson)
		building.people.push(actualPerson);
	
	}
}










/////////////
// TESTING //
/////////////


// Create a few new instances of this person class using the constructor
var noah = new Person('Noah');
var laura = new Person('Laura');
var brett = new Person('Brett');
var jemain = new Person('Jemain');


// Create some buildings
var home = new Building('Home');
var work = new Building('Work');
var bar = new Building('Bar');


// Put some people in the buildings
home.people.push(noah);
work.people.push(laura);
bar.people.push(brett);
bar.people.push(jemain);

// Creating an object literal will create an instance of object
// var chris = {
// 	name: 'Chris'
// 	sayHey: function() {
// 		console.log('Hey');
// 	}
// };




$(document).on('ready', function() {
  
});