var Bossresurrect2 = function () {};

module.exports = Bossresurrect2;

var boss;
Bossresurrect2.prototype = {

    create: function () {
        this.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.stage.backgroundColor = '#8B0000';

        boss = this.add.sprite(100, 400,'Cyborg');
        this.physics.enable(boss , Phaser.Physics.ARCADE);
        boss.body.velocity.y = -200;
        console.log('up');
        this.game.time.events.add(Phaser.Timer.SECOND * 2, switchstate, this);
        function switchstate(){
            this.game.state.start('Boss3');
        }

        this.music = this.game.add.audio('tdBattle');
        this.music.volume = 1;
        this.music.loop = true;
        this.music.play();



    },

    shutdown: function () {
        this.music.volume = 1;
        this.music.stop();
    }


};