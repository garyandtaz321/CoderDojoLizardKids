var Menu = function () {
  this.text = null;
};

module.exports = Menu;

var keyup;
var keydown;
var selection;

Menu.prototype = {
  create: function () {
    selection = -2;
    this.asset = this.add.sprite(0, 0, 'menu0');
    this.asset.scale.x = 1.5;
    this.asset.scale.y = 1.5;

    //Assign Keys

    keyup = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);
    keyup.onDown.add(function() {
      console.log("KEY UP"); // Key UP
      selection += 2;
      console.log(selection);
    }, this);
    keydown = this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    keydown.onDown.add(function() {
      console.log("KEY DOWN");
      selection -= 2;
      console.log(selection);
    }, this);

  },
  update: function () {
  }
};