
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