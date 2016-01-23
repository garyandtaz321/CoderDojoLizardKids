var Player = require('../models/player');

var Game = function () {
  this.testentity = null;
  var cursors = null;
};

module.exports = Game;
var sprite;



Game.prototype = {


  create: function () {




    sprite = this.add.sprite(200, 200, 'ZAMBIE');




    cursors = this.input.keyboard.createCursorKeys();



  }
}


function update() {


  if (cursors.left.isDown) {
    sprite.body.moveLeft(400);
  } else if (cursors.right.isDown) {
    sprite.body.moveRight(400);
  }
  if (cursors.up.isDown) {
    sprite.body.moveUp(400);
  } else if (cursors.down.isDown) {
    sprite.body.moveDown(400);
  }

}
