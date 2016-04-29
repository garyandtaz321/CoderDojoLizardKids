var BossDie2 = function () {};

module.exports = BossDie2;

var boss;
BossDie2.prototype = {

    create: function () {
        this.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.stage.backgroundColor = '#8B0000';

        boss = this.add.sprite(100, 0,'Devito');
        this.physics.enable(boss , Phaser.Physics.ARCADE);
        boss.body.velocity.y = 200;
        console.log('up');
        var damage = boss.animations.add('damage', [0,1], 15, true);
        damage.play('damage');
        this.game.time.events.add(Phaser.Timer.SECOND * 3.5, switchstate, this);
        function switchstate(){
            this.game.state.start('Resurrect2');
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