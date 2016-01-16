var Preloader = function (game) {
  this.asset = null;
  this.ready = false;
};

module.exports = Preloader;

Preloader.prototype = {
    preload: function () {

        //Images

        this.asset = this.add.sprite(this.game.width/2, this.game.height/2, 'preloader');
        this.asset.anchor.setTo(0.5, 0.5);

        this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
        this.load.setPreloadSprite(this.asset);
        this.load.image('testimage', 'assets/test.png');
        this.load.image('logo', 'assets/LizardBoys.gif');
        this.load.image('menu0','assets/menu0.png');
        this.load.image('menu1','assets/menu1.png');
        this.load.image('menu2','assets/menu2.png');

        // Audio

        this.load.audio("gameboop","assets/BootSound.mp3")
      },

      create: function () {
        this.asset.cropEnabled = false;
      },

      update: function () {
        if (!!this.ready) {
          this.game.state.start('Splash');

        }
      },

      onLoadComplete: function () {
        this.ready = true;
      }
};
