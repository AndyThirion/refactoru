var SpaceHipster = SpaceHipster || {};

// Title Screen
SpaceHipster.Game = function() {};

SpaceHipster.Game.prototype = {
	create: function() {
		// set world dimensions
		this.game.world.setBounds(0,0,1920,1920);

		// Star sprite is background again
		// Create a tileSprite for it
		this.background = this.game.add.tileSprite(0,0, this.game.world.width, this.game.world.height, 'space');

		// Player will be a sprite located in the center of the world
		this.player = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'playership');

		// Make the sprite a bit bigger with .scale.setTo(2);
		this.player.scale.setTo(2);

		// Player will be animated the entire time
		this.player.animations.add('fly', [0, 1, 2, 3], 5, true);
		this.player.animation.play('fly');

		// player initial score of 0
		this.playerScore = 0;

		// enable physics
		this.game.physics.arcade.enable(this.play);
		this.playerSpeed = 120;
		this.player.body.collideWorldBounds = true;

	},
	update: function() {

		// Check if player made an input with mouse/finger
		// If so, move player towards input
		if (this.game.input.activePointer.justPressed()) {

			// Move the player towards the pointer location at player.Speed
			this.game.physics.arcade.moveToPointer(this.player, this.playerSpeed);
		}

		
	},
};