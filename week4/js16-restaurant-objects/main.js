/**
 * FoodItem Class
 * @param {string} name       Name of food
 * @param {num} calories   Number of calories
 * @param {boolean} vegan      Is it vegan
 * @param {boolean} glutenFree Is it gluten free
 * @param {boolean} citrusFree Is it citrus free
 */
var FoodItem = function(name, calories, vegan, glutenFree, citrusFree) {
	this.name = name;
	this.calories = calories;
	this.vegan = vegan;
	this.glutenFree = glutenFree;
	this.citrusFree = citrusFree;
}

FoodItem.prototype.toString = function() {
	var returnString = "Name: " + this.name + "\nCalories: " + this.calories + "\nVegan: " + this.vegan + "\nglutenFree: " + this.glutenFree + "\ncitrusFree: "+ this.citrusFree;
	return returnString;
	// return "Name: " + this.name + "\nCalories: " + this.calories + "\nVegan: " + this.vegan;
};

var beer = new FoodItem("Beer", 120, true, false, true);

var sandwich = new FoodItem("Sandwich", 300, false, false, true);

var frenchFries = new FoodItem("French Fries", 250, true, true, true);

// console.log(beer.toString() + "\n");
// console.log(sandwich.toString() + "\n");
// console.log(frenchFries.toString() + "\n");


// Part 2

/**
 * Drink Constructor
 * @param {string} name        Name of drink
 * @param {string} description Description of drink
 * @param {number} price       Price
 * @param {array}  ingredients Ingredients
 */
var Drink = function(name, description, price, ingredients){
	this.name = name;
	this.description = description;
	this.price = price;
	this.ingredients = ingredients;
	this.toString = function() {
		return "\n\nName: " + this.name + "\nDescription: " + this.description + "\nPrice: $" + this.price + "\nIngredients: \n\t" + this.ingredients.join(',\n\t')
	}
}

/**
 * Plate Constructor
 * @param {string} name        Name of meal
 * @param {string} description Short Description of meal
 * @param {number} price       Price
 * @param {array}  ingredients Ingredients
 */
var Plate = function(name, description, price, ingredients) {
	this.name = name;
	this.description = description;
	this.price = price;
	this.ingredients = ingredients;
	this.toString = function() {
		return "\n\nName: " + this.name + "\nDescription: " + this.description + "\nPrice: $" + this.price + "\nIngredients:\n\t" + this.ingredients.join(',\n\t');
	}
}

/**
 * Order Constructor
 * @param {array}  plates Plates in the order
 */
var Order = function(plates) {
	this.plates = plates;
	this.toString = function(){
		var returnString = "\nItems in this order:";
		for (var i = 0; i < this.plates.length; i++){
			returnString += "\t" + this.plates[i].toString();
		}
		return returnString;
	}
}



/**
 * Menu Constructor
 * @param {array}  plates All meals on menu
 */
var Menu = function(plates) {
	this.plates = plates;
	this.toString = function() {
		var returnString = "\nItems on our menu:";
		for (var i = 0; i < this.plates.length; i++){
			returnString += "\t" + this.plates[i].toString();
		}
		return returnString;
	}
}

/**
 * Restaurant Constructor
 * @param {string} name        Name of restaurant
 * @param {string} description Short desc of restaurant
 * @param {object} menu        Menu object for that restaurant
 */
var Restaurant = function(name, description, menu) {
	this.name = name;
	this.description = description;
	this.Menu = menu;
	this.toString = function()  {
		var returnString = 'Welcome to ' + this.name + "!\n";
		returnString += this.description + "!\n";
		returnString += this.Menu.toString();
		return returnString;
	}
}



var burritoPlate = new Plate('Burrito', 'A tasty and filling meal', 9, ['tortilla', 'steak', 'rice', 'veggies']);

var guacamolePlate = new Plate('Guacamole', 'A healthy and delicious side dish', 6, ['avocado', 'lemon', 'salt']);

var margaritaDrink = new Drink('Margarita', 'You gon\' get drunk, son!', 5, ['tequila', 'triple sec', 'lime']);

var order = new Order([burritoPlate, guacamolePlate, margaritaDrink]);

var menu = new Menu([burritoPlate, guacamolePlate, margaritaDrink]);

var restaurant = new Restaurant('Gordo\'s', 'The best family-owned Mexican restaurant in Boulder', menu)

console.log(order.toString());



















