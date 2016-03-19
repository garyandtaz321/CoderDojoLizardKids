var Boss = function () {};

module.exports = Boss;

var sprite;
var boss;
var lazer;
var tween1;
var back;
var attack;
Boss.prototype = {



    create: function () {
        this.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.stage.backgroundColor = '#8B0000';
        //back = this.add.sprite(400, 300, 'bossBack');
        //var spook = back.animations.add('spook', [0,1,2,3,4,5,6,7], 30, true);
        //spook.play('spook')orb;



        sprite = this.add.sprite(567, 400, 'walker');
        var pWalk = sprite.animations.add('pWalk', [0,1], 10, true);
        pWalk.play('pWalk');
        attack = this.add.sprite(20, 300,'attack');
        var flash = attack.animations.add('flash', [0,1], 2, true);
        flash.play('flash');
        attack.scale.x = 1/2;
        attack.scale.y = 1/2;

        boss = this.add.sprite(400, 300,'tDevito');
        boss.scale.x = 4;
        boss.scale.y = 4;
        lazer = this.game.make.group();
        for (var i = 0; i < 10; i++)
        {
            var s = lazer.create(this.game.rnd.integerInRange(456, 300), this.game.rnd.integerInRange(25, 345), 'tDevito');

            this.game.physics.enable(s, Phaser.Physics.ARCADE);
            s.body.velocity.x = this.game.rnd.integerInRange(-300, 234);
            s.body.velocity.y = this.game.rnd.integerInRange(-123, 345);
        }
        lazer.setAll('body.collideWorldBounds', true);
        lazer.setAll('body.bounce.x', 1);
        lazer.setAll('body.bounce.y', 1);
        lazer.setAll('body.minBounceVelocity', 0);

        var walk = boss.animations.add('walk', [0,1], 30, true);
        walk.play('walk');
        this.physics.enable(sprite , Phaser.Physics.ARCADE);
        this.physics.enable(boss , Phaser.Physics.ARCADE);

        cursors = this.input.keyboard.createCursorKeys();



        this.music = this.game.add.audio('tdBattle');
        this.music.volume = 1;
        this.music.loop = true;
        this.music.play();



    },

    update: function () {
        this.physics.arcade.collide(sprite, attack, this.collisionHandler2, null, this);

        sprite.body.velocity.x = 0;
        sprite.body.velocity.y = 0;
        this.physics.arcade.collide(sprite, lazer, this.collisionHandler, null, this);

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
        boss.rotation += 0.05;

    },
    collisionHandler: function  (obj1, obj2 ) {
        this.game.state.start("Intro8y");
    },
    // collisionHandler2: function  (obj1, obj2 ) {
    //this.game.state.start("Intro8y");

    //},
    shutdown: function () {
        this.music.volume = 1;
        this.music.stop();
    }

};