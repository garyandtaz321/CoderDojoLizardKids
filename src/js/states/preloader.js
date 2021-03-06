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

        this.load.image('logo', 'assets/CDT.png');
        this.load.image('BK1', 'assets/firstbk.png');
        this.load.image('BK2', 'assets/secondbk.png');
        this.load.image('BK3', 'assets/thirdbk.png');
        this.load.image('BK4', 'assets/fourthbk.png');
        this.load.image('goal', 'assets/goal.png');
        this.load.image('end', 'assets/Endofgame.png');
        this.load.image('menu0','assets/startbutt.png');
        this.load.image('menu1','assets/restartbutt.png');
        this.load.image('menu2','assets/quitbutt.png');
        this.load.image('ZAMBIE','assets/Devito.png');
        this.load.image('Player','assets/sausage.png');
        this.load.image('title','assets/sausagefingerstitle.png');
        this.load.image('titlebk','assets/bigger.png');
        this.load.image('Winner','assets/WINNA.jpg');
        this.load.image('bullet' ,'assets/bullet5.png' );
        this.load.image('lazer','assets/lazer.png');
        this.load.image('sweat', 'assets/sweat.png');
        this.load.image('ps', 'assets/dansface.png');
        this.load.image('aps','assets/actualPS.png');
        this.load.image('lb', 'assets/BigBurst.png');
        this.load.image('space', 'assets/background.jpg');
        this.load.image('DungeonCrawl_ProjectUtumnoTileset', 'assets/DungeonCrawl_ProjectUtumnoTileset.png');
        this.load.image('SD','assets/SD.png');
        this.load.image('stan','assets/Stan.png');
        this.load.image('name','assets/DannyD.png');
        this.load.image('punished','assets/Punished.png');
        this.load.image('FN', 'assets/floweynuke.png');
        this.load.image('salad','assets/potatoprojectile.png');
        // Audio

        this.load.audio("gameboop","assets/BootSound.mp3");
        this.load.audio("titlesong","assets/ATYD.mp3");
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
        this.load.audio('lazerN','assets/lazershoot.wav');
        this.load.audio('hit1','assets/dannyhit1.wav');
        this.load.audio('hit2','assets/dannyhit2.wav');
        this.load.audio('hit3','assets/dannyhit3.wav');
        this.load.audio('blaster','assets/blaster.mp3');
        this.load.audio('GunSound','assets/GunSound.mp3');
        this.load.audio('EESong','assets/EESong.mp3');

        // Spritesheets
        this.game.load.spritesheet('startbuttsheet','assets/startbutt.png',392/2, 54);
        this.game.load.spritesheet('restartbuttsheet','assets/restartbutt.png', 392/2, 54);
        this.game.load.spritesheet('quitbuttsheet','assets/quitbutt.png', 392/2, 54);
        this.game.load.spritesheet('InstructButts','assets/instructbutt.png', 540/2, 54);
        this.game.load.spritesheet('BasructButts','assets/backbuttsheet.png', 250/2, 138);
        this.game.load.spritesheet('tDevito','assets/devitorun.png', 32, 32);
        this.game.load.spritesheet('walker','assets/walk.png', 32, 32);
        this.game.load.spritesheet('idle', 'assets/idle.png', 32, 32);
        this.game.load.spritesheet('attack','assets/attackbutt.png', 396/2, 81);
        this.game.load.spritesheet('hb','assets/healthbar.png', 6565/13, 40);
        this.game.load.spritesheet('bb','assets/weeee.png', 14560/70, 200);
        this.game.load.spritesheet('bba','assets/try again.png', 582/2, 53);
        this.game.load.spritesheet('bba','assets/try again.png', 582/2, 53);
        this.game.load.spritesheet('liverroni','assets/Livesforlvls.png',216/4, 18);
        this.game.load.spritesheet('saladHealth','assets/saladHealth.png',1024/8,24);

        // Tilemaps

        this.game.load.tilemap('map', 'assets/Worknow.json', null, Phaser.Tilemap.TILED_JSON);
        this.game.load.spritesheet('Devito' ,'assets/Deee.png',1280/2, 640);
        this.game.load.spritesheet('Cyborg' ,'assets/CyborgDevito.png', 1336/2, 596);
        this.game.load.spritesheet('Titles','assets/Titles.png', 1200/3, 100);
        this.game.load.spritesheet('PA','assets/playerblaster.png',2016/21, 96);
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
