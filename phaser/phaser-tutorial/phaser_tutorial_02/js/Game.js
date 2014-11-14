game.Game = function() {};

game.Game.prototype = {
	preload: function() {
		game.load.image('sky', 'assets/sky.png');
		game.load.image('ground', 'assets/platform.png');
		game.load.image('star', 'assets/star.png')
		game.load.spritesheet('dude', 'assets/dude.png', 32,48);
	},

	create: function() {

		// We're going to be using physics, so enable Arcade Physics system
		game.physics.startSystem(Phaser.Physics.ARCADE);

		// Add a simple background for our game
		game.add.sprite(0,0, 'sky');

		// The platforms group contains the ground and the 2 ledges we can jump on
		platforms = game.add.group();

		// We will enable physics for any object in this group
		platforms.enableBody = true;

		// Create the ground
		var ground = platforms.create(0, game.world.height - 64, 'ground')

		// Scale the ground to fit the width of the game (original sprite is 400x32)
		ground.scale.setTo(2,2);

		// This makes the ground immovable when you jump on it
		ground.body.immovable = true;

		// Now we create 2 ledges
		var ledge = platforms.create(400, 400, 'ground');
		ledge.body.immovable = true;

		ledge = platforms.create(-150, 250, 'ground');
		ledge.body.immovable = true;

		// The player and its settings
		player = game.add.sprite(32, game.world.height - 150, 'dude');

		// Enable physics on player
		// Adds instance of ArcadePhysics.Body to the player
		game.physics.arcade.enable(player);

		// Player physics properties
		// Going to give him a slight bounce
		player.body.bounce.y = 0.2;

		// Higher gravity # = fall faster
		player.body.gravity.y = 300;
		player.body.collideWorldBounds = true;

		// Our two animations, walking left and right.
		// name of animation, [frames to use], frames/second, loop (true or false)
		player.animations.add('left', [0, 1, 2, 3], 10, true);
		player.animations.add('right', [5, 6, 7, 8], 10, true);

		// Create our controls
		cursors = game.input.keyboard.createCursorKeys();

		// Creating our stars
		stars = game.add.group();

		stars.enableBody = true;

		// Create 12 of them evenly spaces apart
		for (var i = 0; i < 12; i++)
		{
			// Create a star insie of the 'stars' group
			var star = stars.create(i * 70, 0, 'star');

			star.body.collideWorldBounds = true;

			// Let gravity do its thing
			star.body.gravity.y = 20;

			// This gives each star a slightly random bounce value
			star.body.bounce.y = 0.2 + Math.random() * .8;
		}

		scoreText = game.add.text(16, 16, 'score: 0', {fontSize: '32px', fill: '#FFF'});
	},

	update: function() {

		// Collide the player and the stars with platforms
		game.physics.arcade.collide(player, platforms);

		// Collide stars and platform
		game.physics.arcade.collide(stars, platforms);

		// Check if player overlaps a star
		// If so, pass them to the 'collectStar' function
		game.physics.arcade.overlap(player, stars, collectStar, null, this);

		function collectStar (player, star) {
			// Removes the star from the screen
			star.kill();

			// Add and update the score
			score += 10;
			scoreText.text = 'Score: ' + score;
		}

		// Reset the player's velocity (movement)
		player.body.velocity.x = 0;

		if(cursors.left.isDown)
		{
			// Move to the left
			player.body.velocity.x = -150;

			player.animations.play('left');
		}
		else if (cursors.right.isDown)
		{
			player.body.velocity.x = 150;

			player.animations.play('right')
		}
		else
		{
			// Stand still
			player.animations.stop();

			player.frame = 4;
		}

		// Allow the player to jump if they are touching the ground
		if (cursors.up.isDown && player.body.touching.down)
		{
			player.body.velocity.y = -350;
		}

		if (score >= 120) {
			console.log("YOU WIN!");
			game.state.start('GameOver');
		}

	}
}