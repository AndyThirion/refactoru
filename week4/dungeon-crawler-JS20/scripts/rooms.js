/**
 * Basic Room Object
 * @param {num} xPos Position from left (starts at 0)
 * @param {num} yPos Position from bottom (starts at 0)
 */
var Room = function(xPos, yPos, element) {
	this.y = yPos;
	this.x = xPos;
	this.element = element
	this.hasMonster = false;

	this.spawnMonster = function() {

		// Gives us a 25% chance to spawn monster in given room
		if (Math.random() < 0.25){
			this.monster = new Monster();
			this.monster.spawn(this.y, this.x);
			this.hasMonster = true;
		}
	}

	// this.initialize = function() {
	// 	if (this.element) {

	// 	}
	// }
	// this.render = function(xPos, yPos) {

	// }

}



