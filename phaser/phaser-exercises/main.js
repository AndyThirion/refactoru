var blackWindow = new Phaser.Game(800,600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

var player;
var ground;
var platform;

function preload() {
	// this.load.image.spritesheet('baddie', 'baddie.png')
	blackWindow.load.spritesheet('dude', 'assets/dude.png', 32,48);
	blackWindow.load.image('ground', 'assets/platform.png');
	blackWindow.load.image('bricks', 'assets/bricks.png');
}

function create() {
	ground = blackWindow.add.tileSprite(0, blackWindow.world.height - 32, blackWindow.world.width, 64, 'bricks');

	platform = blackWindow.add.tileSprite(0, blackWindow.world.height - blackWindow.world.height/3, blackWindow.world.width/8, 16, 'bricks');

	platform.scale.setTo(2, 2);
	ground.scale.setTo(2);
	blackWindow.stage.backgroundColor = "#00CED1";
	// blackWindow.add.sprite(0,0, 'background');
	player = blackWindow.add.sprite(400, 300, 'dude', 4);
	player.anchor.setTo(0.5);
}

function update() {

}