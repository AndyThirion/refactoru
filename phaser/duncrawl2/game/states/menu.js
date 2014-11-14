
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
