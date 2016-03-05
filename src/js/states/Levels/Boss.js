var Boss = function () {};

module.exports = Boss;

var sprite;
var boss;
var tween1;
var back;
Boss.prototype = {



    create: function () {
        this.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.stage.backgroundColor = '#8B0000';
        //back = this.add.sprite(400, 300, 'bossBack');
        //var spook = back.animations.add('spook', [0,1,2,3,4,5,6,7], 30, true);
        //spook.play('spook');



        sprite = this.add.sprite(567, 400, 'walker');
        var pWalk = sprite.animations.add('pWalk', [0,1], 10, true);
        pWalk.play('pWalk');

        boss = this.add.sprite(400, 400,'tDevito');
        boss.scale.x = 4;
        boss.scale.y = 4;

        var walk = boss.animations.add('walk', [0,1], 30, true);
        walk.play('walk');
       //boss.body.velocity.x =
        this.physics.enable(sprite , Phaser.Physics.ARCADE);
        this.physics.enable(boss , Phaser.Physics.ARCADE);

        cursors = this.input.keyboard.createCursorKeys();



        this.music = this.game.add.audio('tdBattle');
        this.music.volume = 1;
        this.music.loop = true;
        this.music.play();



    },

    update: function () {
        sprite.body.velocity.x = 0;
        sprite.body.velocity.y = 0;








        if (cursors.up.isDown) {
            sprite.body.velocity.y = -200;
            sprite.body.velocity.y = -200;

        }
        else {
            sprite.body.acceleration.set(0);
        }

        if (cursors.left.isDown) {

            sprite.body.velocity.x = -200;


        }
        else if (cursors.right.isDown) {

            sprite.body.velocity.x = 200;
        }

        else if (cursors.down.isDown)
        {
            sprite.body.velocity.y = 200;
            sprite.body.velocity.y = 200;

        }

    },
    tween11: function() {
        tween1 = this.game.add.tween(boss);
        tween1.to({x: [500, 500, 400, 400], y: [250, 150, 150, 250]}, 2000, "Linear").loop(true);
        tween1.start();
    }

};