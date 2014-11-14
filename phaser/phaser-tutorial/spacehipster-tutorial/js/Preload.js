var SpaceHipster = SpaceHipster || {};

// Loading the game assets
SpaceHipster.Preload = function(){};

SpaceHipster.Preload.prototype = {
	preload: function() {
		// Show logo in loading screen
		// First 2 parameters are location on screen to display
		// Third is which image to use as splash screen
		this.splash = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
		this.splash.anchor.setTo(0.5);

		// Load our preload bar 128 pixels below vertical center
		this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 128, 'preloadbar');
		this.preloadBar.anchor.setTo(0.5);

		// Allows us to set a sprite (this.preloadBar in this case) and make it into a loading bar
		this.load.setPreloadSprite(this.preloadBar);

		// Load game assets for Game State
		this.load.image('space', 'assets/images/space.png');
		this.load.image('rock', 'assets/images/rock.png');
		this.load.spritesheet('playership', 'assets/images/player.png', 12, 12);
		this.load.spritesheet('power', 'assets/images/power.png', 12, 12);
		this.load.image('playerParticle', 'assets/images/player-particle.png');
		this.load.audio('collect', 'assets/audio/collect.ogg');
		this.load.audio('explosion', 'assets/audio/explosion.ogg');
	},
	create: function() {
		this.state.start('MainMenu');
	}
}