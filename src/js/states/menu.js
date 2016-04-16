var Menu = function () {
  this.text = null;
};

module.exports = Menu;

var keyup;
var keydown;
var selection;



Menu.prototype = {
  music: null,
  create: function () {
    //Play song

    this.music = this.game.add.audio('titlesong');
    this.music.volume = 1;
    this.music.loop = true;
    this.music.play();

    // Show background
    this.asset = this.add.sprite(0, 0, 'titlebk');

    // Show title
    this.asset = this.add.sprite(400, 0, 'title');

    selection = 1;
    this.asset = this.add.button(0, 0, 'startbuttsheet', function() {
      this.game.state.start('Game');
    }, this, 2, 1, 2);
    this.asset = this.add.button(0, 100, 'restartbuttsheet', function() {
        this.game.state.start('Preloader');
    }, this, 2, 1, 2);
    this.asset = this.add.button(0, 200, 'quitbuttsheet', function() {

    }, this, 2, 1, 2);
    this.asset = this.add.button(0, 300, 'InstructButts', function() {
      this.game.state.start('instruction');
    }, this, 2, 1, 2);
    this.asset.scale.x = 1.5;
    this.asset.scale.y = 1.5;

    //Assign Keys

    keyup = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);
    keyup.onDown.add(function() {
      console.log('KEY UP');
      if (selection !== 1) {
        selection += 1
      }
      else {
        // Do nothing :)
      }
      console.log(selection);
    }, this);
    keydown = this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    keydown.onDown.add(function() {
      console.log('KEY DOWN');
      if (selection !== -1) {
        selection -= 1
      }
      else {
        // Do nothing ;)
      }
      console.log(selection);
    }, this);

  },
  update: function () {
  },
  shutdown: function () {
    this.music.volume = 1;
    this.music.stop();
  }
};