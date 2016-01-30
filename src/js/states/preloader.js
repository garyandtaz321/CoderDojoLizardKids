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
        this.load.image('menu0','assets/startbutt.png');
        this.load.image('menu1','assets/restartbutt.png');
        this.load.image('menu2','assets/quitbutt.png');
        this.load.image('ZAMBIE','assets/zombie_single.png');
        this.load.image('title','assets/sausagefingerstitle.png');

        // Audio
            // Sound Effects
            this.load.audio("gameboop","assets/BootSound.mp3");
            // Music
            this.load.audio('titlesong',"assets/trolltoll.wav");

        // Spritesheets
        this.game.load.spritesheet('startbuttsheet','assets/startbutt.png',396/2, 81);
        this.game.load.spritesheet('restartbuttsheet','assets/restartbutt.png', 488/2, 69);
        this.game.load.spritesheet('quitbuttsheet','assets/quitbutt.png', 392/2, 54);
        this.game.load.spritesheet('InsructButts','assets/instructButt.png', 500/2, 81);
        this.game.load.spritesheet('BasructButts','assets/backbuttsheet.png', 250/2, 138);

            // Character spritesheets
                // Player spritesheets
                this.game.load.spritesheet('playeridle','assets/playeridle.png',64/2,32);
                this.game.load.spritesheet('playerwalk','assets/playerwalk.png',64/2,32);



        //Backgrounds
        this.load.image('titlebk','assets/shreddedbeef.png');
        /*
        Side note:
        Wowie!! We have a lot of comments! Organization is important tho so it's all good ;)
         */
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
