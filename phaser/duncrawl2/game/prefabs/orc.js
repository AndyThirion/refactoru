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
