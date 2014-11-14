(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

//global variables
window.onload = function () {
  var game = new Phaser.Game(480, 480, Phaser.AUTO, 'dungeoncrawler');

  // Game States
  game.state.add('boot', require('./states/boot'));
  game.state.add('gameover', require('./states/gameover'));
  game.state.add('menu', require('./states/menu'));
  game.state.add('play', require('./states/play'));
  game.state.add('preload', require('./states/preload'));
  

  game.state.start('boot');
};
},{"./states/boot":4,"./states/gameover":5,"./states/menu":6,"./states/play":7,"./states/preload":8}],2:[function(require,module,exports){
'use strict';

var Orc = function(game, x, y, frame) {
  Phaser.Sprite.call(this, game, x, y, 'orc', frame);

  // Enable physics for collision detection
  this.game.physics.arcade.enableBody(this);
  // orc shouldn't bounce when things run into it
  // this.body.immovable = true;

  // Set our orc's stats
  this.health = 15;
  this.strength = 5;

  
};

Orc.prototype = Object.create(Phaser.Sprite.prototype);
Orc.prototype.constructor = Orc;

Orc.prototype.update = function() {
  
  // write your prefab's specific update code here
  
};

module.exports = Orc;

},{}],3:[function(require,module,exports){
'use strict';

var Player = function(game, x, y, frame) {
  Phaser.Sprite.call(this, game, x, y, 'player', frame);

  // Enable physics on our player
  this.game.physics.arcade.enableBody(this);
  // player shouldn't bounce when things hit it
  // this.body.immovable = true;

  // Set our player's stats
  this.health = 100;
  this.strength = 10;
  
};

Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;

Player.prototype.update = function() {
  
  // write your prefab's specific update code here
  
};

module.exports = Player;

},{}],4:[function(require,module,exports){

'use strict';

function Boot() {
}

Boot.prototype = {
  preload: function() {
    this.load.image('preloader', 'assets/preloader.gif');
  },
  create: function() {
    this.game.input.maxPointers = 1;
    this.game.state.start('preload');
  }
};

module.exports = Boot;

},{}],5:[function(require,module,exports){

'use strict';
function GameOver() {}

GameOver.prototype = {
  preload: function () {

  },
  create: function () {
    var style = { font: '65px Arial', fill: '#ffffff', align: 'center'};
    this.titleText = this.game.add.text(this.game.world.centerX,100, 'Game Over!', style);
    this.titleText.anchor.setTo(0.5, 0.5);

    this.congratsText = this.game.add.text(this.game.world.centerX, 200, 'You Win!', { font: '32px Arial', fill: '#ffffff', align: 'center'});
    this.congratsText.anchor.setTo(0.5, 0.5);

    this.instructionText = this.game.add.text(this.game.world.centerX, 300, 'Click To Play Again', { font: '16px Arial', fill: '#ffffff', align: 'center'});
    this.instructionText.anchor.setTo(0.5, 0.5);
  },
  update: function () {
    if(this.game.input.activePointer.justPressed()) {
      this.game.state.start('play');
    }
  }
};
module.exports = GameOver;

},{}],6:[function(require,module,exports){

'use strict';
function Menu() {}

Menu.prototype = {
  preload: function() {

  },
  create: function() {

  },
  update: function() {
      this.game.state.start('play');
  }
};

module.exports = Menu;

},{}],7:[function(require,module,exports){

  'use strict';

  var Player = require('../prefabs/player');
  var Orc = require('../prefabs/orc');

  var map;
  var layer;
  var blockedLayer;

  // Use this for positioning things
  // 1 tileSize = 1 unit on map
  var tileSize = 32;


  function Play() {}
  Play.prototype = {
    create: function() {

      // Enable physics for the game 
      this.game.physics.startSystem(Phaser.Physics.ARCADE);
      

      // Load our tileset/map for the level
      map = this.add.tilemap('map');
      map.addTilesetImage('arena-tileset');
      layer = map.createLayer('Tile Layer 1');
      // layer.resizeWorld();
      map.setCollisionBetween(0,100000, 'blockedLayer');

      blockedLayer = map.createLayer('blockedLayer');
      console.log(blockedLayer);

      // Load our player sprite
      // Spawn location is set to x: 8 tiles right, y: 12 tiles down
      this.player = new Player(this.game, tileSize*7, tileSize*12)
      this.game.add.existing(this.player);
      console.log(this.player);

      // Spawn our orc
      this.orc = new Orc(this.game, tileSize*7, tileSize*1);
      this.game.add.existing(this.orc);

      // Enable cursor key movement
      this.cursors = this.game.input.keyboard.createCursorKeys();

    },
    update: function() {

      // if (player.)

      // Player movement
      this.player.body.velocity.y = 0;
      this.player.body.velocity.x = 0;

      if(this.cursors.up.isDown) {
        this.player.body.velocity.y -= tileSize*3;
      } if (this.cursors.down.isDown) {
        this.player.body.velocity.y += tileSize*3;
      }  if (this.cursors.left.isDown) {
        this.player.body.velocity.x -= tileSize*3; 
      }  if (this.cursors.right.isDown) {
        this.player.body.velocity.x += tileSize*3;
      }

      // collision
      // player v orc
      // For now when they collide we want them to both stop moving
      this.game.physics.arcade.collide(this.player, this.orc, this.charCollide, null, this);

      // player vs wall
      this.game.physics.arcade.collide(this.player, this.blockedLayer);

    },
    charCollide: function() {
      console.log("charCollide() was called")
      this.player.body.velocity.x = 0;
      this.player.body.velocity.y = 0;
      this.orc.body.velocity.x = 0;
      this.orc.body.velocity.y = 0;
      this.player.kill()
    }

  };
  
  module.exports = Play;
},{"../prefabs/orc":2,"../prefabs/player":3}],8:[function(require,module,exports){

'use strict';
function Preload() {
  this.asset = null;
  this.ready = false;
}

Preload.prototype = {
  preload: function() {
    this.asset = this.add.sprite(this.width/2,this.height/2, 'preloader');
    this.asset.anchor.setTo(0.5, 0.5);
    this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
    this.load.setPreloadSprite(this.asset);

    this.load.image('arena-tileset', 'assets/arena-tileset.png');
    this.load.tilemap('map', 'assets/arena.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.image('player', 'assets/deep_elf_knight.png');
    this.load.image('orc', 'assets/orc.png');
  },
  create: function() {
    this.asset.cropEnabled = false;
  },
  update: function() {
    if(!!this.ready) {
      this.game.state.start('menu');
    }
  },
  onLoadComplete: function() {
    this.ready = true;
  }
};

module.exports = Preload;

},{}]},{},[1])