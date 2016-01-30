var Player = require('../models/player');

var Game = function () {
  this.testentity = null;
};
var sprite;
var group;
var cursors;
module.exports = Game;

Game.prototype = {

  create: function () {
    this.physics.startSystem(Phaser.Physics.ARCADE);
    sprite = this.add.sprite(32, 200, 'ZAMBIE');
    this.physics.arcade.enable(sprite)
    cursors = this.input.keyboard.createCursorKeys();
  },

  update: function () {
    sprite.body.velocity.x = 0;
    sprite.body.velocity.y = 0;

    if (cursors.left.isDown)
    {
      sprite.body.velocity.x = -200;
    }
    else if (cursors.right.isDown)
    {
      sprite.body.velocity.x = 200;
    }

    if (cursors.up.isDown)
    {
      sprite.body.velocity.y = -200;
    }
    else if (cursors.down.isDown)
    {
      sprite.body.velocity.y = 200;
    }

  },



};