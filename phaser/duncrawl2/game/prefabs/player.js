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
