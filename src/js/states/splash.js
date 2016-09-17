var Splash = require('../models/splash');
var Splash = function () {

};


module.exports = Splash;

Splash.prototype = {

  create: function () {
    this.game.stage.backgroundColor = "#FFFFFF";

    this.asset = this.add.sprite(25, 200, 'logo');
    this.asset.scale.x = 1.5;
    this.asset.scale.y = 1.5;
    this.asset.alpha = 0;
    this.faded_in = false;

    //Play gameboop

    this.music = this.game.add.audio("gameboop");
    this.music.volume = 1;
    this.music.loop = false;
    this.music.play();
  },
  update: function () {
    if (this.asset.alpha <1 && !this.faded_in) {
      this.asset.alpha+=0.01;
    } else if(this.asset.alpha >= 1) {
      this.faded_in = true;
    }
    if(this.faded_in) {
      this.asset.alpha -= 0.01;
    }
    if (this.asset.alpha < 0) {
      this.game.state.start('Menu');
    }
  }
};