var BossDie1 = function () {};

module.exports = BossDie1;

var boss;
BossDie1.prototype = {



    create: function () {
        this.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.stage.backgroundColor = '#8B0000';

        boss = this.add.sprite(400, 300,'tDevito');
        this.physics.enable(boss , Phaser.Physics.ARCADE);
        boss.scale.x = 4;
        boss.scale.y = 4;
        boss.angle = 90;
        var die = boss.animations.add('die', [0,1,2,3], 30, true);
        die.play('die');
        boss.body.velocity.y = 200;
        this.game.time.events.add(Phaser.Timer.SECOND * 3, switchstate, this);
        function switchstate(){
            this.game.state.start('Resurrect');
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