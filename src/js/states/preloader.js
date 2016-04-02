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

        this.load.image('logo', 'assets/LizardBoys.gif');
        this.load.image('goal', 'assets/goal.png');
        this.load.image('end', 'assets/Endofgame.png');
        this.load.image('menu0','assets/startbutt.png');
        this.load.image('menu1','assets/restartbutt.png');
        this.load.image('menu2','assets/quitbutt.png');
        this.load.image('ZAMBIE','assets/zombie_single.png');
        this.load.image('Player','assets/sausage.png');
        this.load.image('title','assets/sausagefingerstitle.png');
        this.load.image('titlebk','assets/shreddedbeef.png');
        this.load.image('Winner','assets/WINNA.jpg');
        this.load.image('Cyborg' , 'assets/CyborgDevito.png');
        this.load.image('Devito' ,'assets/Deee.png' );
        this.load.image('bullet' ,'assets/bullet5.png' );
        this.load.image('lazer','assets/lazer.png');
        this.load.image('sweat', 'assets/sweat.png');
        this.load.image('ps', 'assets/dansface.png');
        this.load.image('aps','assets/actualPS.png');
        this.load.image('lb', 'assets/BigBurst.png');
        this.load.image('space', 'assets/background.jpg');
        // Audio

        this.load.audio("gameboop","assets/BootSound.mp3");
        this.load.audio("titlesong","assets/trolltoll.wav");
        this.load.audio("Instructsong","assets/Kappa123.wav");
        this.load.audio("Laugh" ,"assets/Laugh.mp3");
        this.load.audio('WinSong', 'assets/sunny.mp3');
        this.load.audio('tdBattle','assets/EnmityOfTheDarkLord.mp3');
        this.load.audio('winSong', 'assets/sunny.mp3');
        this.load.audio('attackS','assets/Combat.mp3');
        this.load.audio('DBattle','assets/AnimusOfTheDarkLord.mp3');
        this.load.audio('CBattle','assets/MalevolenceOfTheDarkLord.mp3');
        this.load.audio('LE','assets/LE.mp3');
        this.load.audio('EES','assets/EESong.mp3');

        // Spritesheets
        this.game.load.spritesheet('startbuttsheet','assets/startbutt.png',396/2, 81);
        this.game.load.spritesheet('restartbuttsheet','assets/restartbutt.png', 488/2, 69);
        this.game.load.spritesheet('quitbuttsheet','assets/quitbutt.png', 392/2, 54);
        this.game.load.spritesheet('InstructButts','assets/instructbutt.png', 500/2, 81);
        this.game.load.spritesheet('BasructButts','assets/backbuttsheet.png', 250/2, 138);
        this.game.load.spritesheet('tDevito','assets/devitorun.png', 32, 32);
        this.game.load.spritesheet('walker','assets/walk.png', 32, 32);
        this.game.load.spritesheet('idle', 'assets/idle.png', 32, 32);
        this.game.load.spritesheet('attack','assets/attackbutt.png', 396/2, 81);
        this.game.load.spritesheet('hb','assets/healthbar.png', 6565/13, 40);
        this.game.load.spritesheet('bb','assets/weeee.png', 14560/70, 200);
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
