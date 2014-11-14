// Create our namespace
// If it already exists we use it, otherwise we create a new object
var SpaceHipster = SpaceHipster || {};

// Initiate a new game and set the size of the window
SpaceHipster.game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '');

// Register our different game states
SpaceHipster.game.state.add('Boot', SpaceHipster.Boot);
// Uncomment these as we add the files
SpaceHipster.game.state.add('Preload', SpaceHipster.Preload);
SpaceHipster.game.state.add('MainMenu', SpaceHipster.MainMenu);
SpaceHipster.game.state.add('Game', SpaceHipster.Game);


// Launch the game in the Boot state
SpaceHipster.game.state.start('Boot');