
  'use strict';

  var map;
  var layer;

  function Play() {}
  Play.prototype = {
    create: function() {
      this.game.physics.startSystem(Phaser.Physics.ARCADE);
      // this.sprite = this.game.add.sprite(this.game.width/2, this.game.height/2, 'yeoman');
      // this.sprite.inputEnabled = true;
      
      // this.game.physics.arcade.enable(this.sprite);
      // this.sprite.body.collideWorldBounds = true;
      // this.sprite.body.bounce.setTo(1,1);
      // this.sprite.body.velocity.x = this.game.rnd.integerInRange(-500,500);
      // this.sprite.body.velocity.y = this.game.rnd.integerInRange(-500,500);

      // this.sprite.events.onInputDown.add(this.clickListener, this);
      
    map = this.add.tilemap('map'); //preloaded tilemap
    map.addTilesetImage('arena-tileset'); //preloaded tileset
    // console.log("Map: ", map);
    // console.log("createLayer: ", map.createLayer('Tile Layer 1'));
    layer = map.createLayer('Tile Layer 1'); //Default name of first layer in Tiled
    layer.resizeWorld(); //Sets the world size to match the size of this layer
    map.setCollisionBetween(0,100); // Makes the tiles collide with each other (?)
      
    },
    update: function() {

    }
  };
  
  module.exports = Play;