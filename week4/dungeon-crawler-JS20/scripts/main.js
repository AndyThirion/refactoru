// Functions to define:
// 	makeRooms - create the Rooms when world.initialize is called
//  spawnPlayer - spawn the Player object at Room 0,0
//  spawnEnemies - populates the level with enemies


/****************************************
*****    CLASSES    *********************
****************************************/

/*
Class list:
	World
	Character
		Player
		Monster
	Room
	Item
 */

// World Class
/**
 * Object that holds and populates all other objects
 * @param {array} size [num horizontal rooms, num vertical rooms]
 */
var World = function(sizeX, sizeY) {
	this.size = {
		x: sizeX,
		y: sizeY
	};

	// Our array of arrays for Rooms
	// Will end up looking like:
	//   [
	//   	Row0 array = [room00 obj, room 01 obj, room 02 obj]
	//   	Row1 array = [room10 obj, room 11 obj, room 12 obj]
	//   	.......
	//   ]
	this.rooms = [];

	/**
	 * Create the world
	 * @param  {num} pHP Player Starting HP
	 * @param  {num} pSTR Player Starting Strength
	 * @param  {num} pINV Default Inventory Slots
	 */
	this.initialize = function(pHP, pSTR, pINV) {
		this.enableControls();
		this.makeRooms();
		player.spawn();
		spawnEnemies();
	}

	this.disableControls = function() {

		Mousetrap.unbind('up')
		Mousetrap.unbind('right')
		Mousetrap.unbind('down')
		Mousetrap.unbind('left')
	}

	this.enableControls = function() {
		// When an arrow key is pressed:
		//   player.move is called
		//   We use .bind() to allow us to pass a parameter
		Mousetrap.bind('up', player.move.bind(player, 'n'))
		Mousetrap.bind('right', player.move.bind(player, 'e'))
		Mousetrap.bind('down', player.move.bind(player, 's'))
		Mousetrap.bind('left', player.move.bind(player, 'w'))
	}

	// Auto Generate the Rooms
	this.makeRooms = function() {
		for (var i = 0; i < world.size.y; i++) {

			world.rooms[i] = [];
			// Create a new table row with class .room-row-i
			var newRow = '<tr class="room-row-' + i + '"></tr>';
			// Add the new table row to the top of the grid
			$(newRow).prependTo('.room-table>tbody');
		
			// Create a row of rooms world.size.x wide
			for (var j = 0; j < world.size.x; j++) {

				world.rooms[i][j] 
				var newRoom = new Room(j, i, '<td class ="room" id="room-'+i+'-'+j+'"></td>');
				world.rooms[i][j] = newRoom
				var element = world.rooms[i][j].element
				console.log(element);
				$(element).appendTo('.room-row-'+i)


				// Spawn our monsters
				// We never want one in our starting room
				if (i != player.spawnLocation.y || j != player.spawnLocation.x){
					newRoom.spawnMonster();
				}

				// // Create a new td room
				// var newRoom = '<td class="room" id="room-' + i + '-' + j + '">Room ' + i + ',' + j + '</td>';
				// $(newRoom).appendTo('.room-row-' + i);
			}
		}
	}

	this.gameOver = function() {
		console.log("GAME OVER! YOU LOSE! YOU GO AWAY NOW!");
		this.disableControls();
	}
}


/**
 * Our Player
 * @param {num} hp
 * @param {num} str
 * @param {array} inventory
 */
var Character = function(hp, str) {
	// How much health the player has
	this.hp = hp || 20;
	// Number of inventory slots
	this.str = str || 3;


	// This is set in this.render()
	this.element = ''


	this.room = {}
	this.location = {};
	
	// this.room = world.rooms[this.location.y][this.location.x];
	// console.log(this.location.y + "," + this.location.x)

	// METHODS

	// Take damage, call when player gets hit
	this.takeDamage = function(damage) {
		this.hp -= damage;
		console.log(this.name, "took", damage, "damage.")
		if (this.hp < 1) {
			this.die();
		}
	}


	/**
	 * Character attacks another character
	 * @param  {object} target The Character Object that is being attacked
	 * @return {number}        Amount of damage the target takes
	 */
	this.attack = function(target) {


		// Make sure player can't move until damage text is done
		world.disableControls();
		setTimeout(function() {
			world.enableControls()
		}, 500);

		damage = this.str;
		target.takeDamage(damage);
		target.counterAttack(this);

		// Make it so damage numbers pop up on screen
		// var damageText = $('<p class="player-damage-text">' + damage + '</p>')

		if (this instanceof Player === true) {	
			var damageText = $('<p class="damage-text player-damage-text">' + damage + '</p>');
			setTimeout(function() {
				$('.player-damage-text').css("opacity", "0");
			}, 0)
			$(damageText).appendTo('#room-'+this.room.y+'-'+this.room.x)
		} else if (this instanceof Monster === true) {
			var damageText = $('<p class="damage-text monster-damage-text">' + damage + '</p>')
			$(damageText).appendTo('#room-'+player.room.y+'-'+player.room.x)
			setTimeout(function() {
				$('.monster-damage-text').css("opacity", "0");
			}, 0)
		}

		// Print the damage text, then wait .5 seconds and remove it
		// $(damageText).appendTo('#room-'+this.room.y+'-'+this.room.x)



			// $(damageText).remove();

		return damage;
	}

	this.counterAttack = function(target) {

		damage = this.str;
		target.takeDamage(damage);


		// Damage text pop up on screen
		// Player attack or monster attack?
		if (this instanceof Player === true) {	
			var counterDamageText = $('<p class="damage-text player-damage-text">' + damage + '</p>');
			$(counterDamageText).appendTo('#room-'+this.room.y+'-'+this.room.x)
			setTimeout(function() {
				$('.player-damage-text').css("opacity", "0");
			}, 0)
		} else if (this instanceof Monster === true) {
			var counterDamageText = $('<p class="damage-text monster-damage-text">' + damage + '</p>')
			setTimeout(function() {
				$('.monster-damage-text').css("opacity", "0");
			}, 25)

			// Set shortest possible timetout to beat race condition with player.move
			// Without this the game thinks that the player is in the monster's
			// room when it tries to display the text
			setTimeout(function() {
				$(counterDamageText).appendTo('#room-'+player.room.y+'-'+player.room.x)}, 0)
		}

		
		
		return damage;

	}


	// Create the Player element
	this.render = function() {
		
		// If Player element already exists, return it
		if (this.element) {
			// return this.element
			$(this.element).appendTo('#room-' + this.room.y + '-' + this.room.x)
			// return this.element;
		}

		// If Player element does not exist,
		// create it and store it as this.element
	else {
			this.element = $('<div class="character ' + this.name + '">' + this.name +'</div>');

			// Return the element
			
		}
		return this.element;
	}

	// Spawn the player in room 0,0
	this.spawn = function(yPos, xPos) {

		if (this.spawnLocation) {
			yPos = this.spawnLocation.y;
			xPos = this.spawnLocation.x;
		} else {
			yPos = yPos
			xPos = xPos;
		}

		this.location.y = yPos;
		this.location.x = xPos;

		this.room = world.rooms[this.location.y][this.location.x];


		this.render();
		// $(this.element).appendTo(".player-spawn");
		$(this.element).appendTo('#room-' + yPos + '-' + xPos)
	}

	this.updateRoom = function() {
		this.room = world.rooms[this.location.y][this.location.x];
	}

	this.die = function() {
		console.log(this.name, "died!");
		this.element.remove();
		
		// If a monster dies we need to tell the game
		// that the room no longer has a monster in it
		if (this instanceof Monster === true){
			this.room.hasMonster = false;
		}

		// If a player dies we need to end the game
		if (this instanceof Player === true) {

			// Remove the player element (must have delay to avoid movement race condition)
			// Call world.gameOver() to disable controls and fire ending sequence
			setTimeout(function() {
				player.element.remove()
			}, 0);
			world.gameOver();
		}
	}
}

var Player = function(hp, str, inventory) {
	
	// Player inherits from Character()
	Character.call(this);

	// Which room the player spawns in
	// [X coord, Y coord]
	// [0,0] is top left of screen
	this.spawnLocation = {
		x: 0,
		y: 0
	}

	this.hp = hp || 100
	this.str = str || 10

	this.name = 'P';

	// How many items can the player's inventory hold
	this.inventory = inventory

	// Movement from room to room
	this.move = function(direction) {

		// Forcing context for our variable position read
		var context = this

		// Store the Room position that character is moving from
		// This is so we can move him back if there is an enemy
		//  in the room he's moving to
		var movedFrom = {
			y: this.location.y,
			x: this.location.x
		}

		// Check which direction they are heading
		switch (direction) {
			case 'n':
			// Move North (this.location[1] -=1)
				this.location.y += 1;
				break;
			case 'e':
			// Move East
				this.location.x += 1;
				break;
			case 's':
			// Move South
				this.location.y -= 1;
				break;
			case 'w':
			// Move West
				this.location.x -=1;
				break;
			default:
				return "Oops, something broke in navigation"
		}
		if (this.location.x < 0) {
			this.location.x = 0;
		} else if (this.location.x > world.size.x -1) {
			this.location.x = world.size.x -1;
		} else if (this.location.y < 0) {
			this.location.y = 0;
		} else if (this.location.y > world.size.y -1) {
			this.location.y = world.size.y -1;
		}


		// Update the character's Room to current Room Object
		this.updateRoom();

		if (this.room.hasMonster){
				this.attack(this.room.monster);
				if (this.room.hasMonster){
					this.location.y = movedFrom.y;
					this.location.x = movedFrom.x;
			}
				// this.room = world.rooms[movedFrom.y][movedFrom.x]
		}

		this.updateRoom();

		this.element.remove();
		this.render();
		// this.element.remove();
		// this.render();
	}
}

Player.prototype = new Character();
Player.prototype.constructor = Player;

var Monster = function(hp, str) {
	Character.call(this);
	this.name = 'M'
}

Monster.prototype = new Character();
Monster.prototype.constructor = Monster;


var monster = new Monster();
var world = new World(8,5);
var player = new Player();

/*****************************************
************* FUNCTIONS ******************
*****************************************/

//MOVEMENT LISTENERS

// // When an arrow key is pressed:
// //   player.move is called
// //   We use .bind() to allow us to pass a parameter
// Mousetrap.bind('up', player.move.bind(player, 'n'))
// Mousetrap.bind('right', player.move.bind(player, 'e'))
// Mousetrap.bind('down', player.move.bind(player, 's'))
// Mousetrap.bind('left', player.move.bind(player, 'w'))

// CHEAT CODE
// Mousetrap.bind('i d d q d', console.log.bind(player, "IT WORKED!"))




$(document).on('ready', function() {




	world.enableControls();
	world.makeRooms();
	player.spawn();
	// monster.spawn(1,0);

	// // Testing movement event handler
  
});