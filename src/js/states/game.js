var Player = require('../models/player');

var Game = function () {
    this.testentity = null;
};

var sprite;
var Enemies;
var Enemies1;
var points;
var tween1;

var L = 0;
var Goal;
var tween2;
var tweenB;
var group;
var end;
this.bmd = null;
var cursors;
var Bakground;
var Keys;
var right;
var left;
var Health;
var HealthCollisions = {
    collided: false,
    locked: false
};
module.exports = Game;

Game.prototype = {

    create: function () {

        Bakground = this.add.sprite(0, 0, 'BK1');
        Health = this.game.add.sprite(100, 100, 'liverroni');
       Enemies =  this.game.make.group();
        Enemies1 =  this.game.make.group();
        for (var i = 0; i < 0; i++)
        {
            var s = Enemies.create(this.game.rnd.integerInRange(456, 300), this.game.rnd.integerInRange(25, 345), 'ZAMBIE');

            this.game.physics.enable(s, Phaser.Physics.ARCADE);
            s.body.velocity.x = this.game.rnd.integerInRange(-300, 234);
            s.body.velocity.y = this.game.rnd.integerInRange(-123, 345);
        }



        this.physics.startSystem(Phaser.Physics.ARCADE);
        sprite = this.add.sprite(1632, 1632, 'walker');
        var pWalk = sprite.animations.add('pWalk', [0,1], 10, true);
        pWalk.play('pWalk');
        // Spawning

        end = this.add.sprite(800, 0, 'Endofgame');
      Goal =  this.add.sprite(0, 0, 'goal');



        this.physics.enable(sprite , Phaser.Physics.ARCADE);
        this.physics.enable(Enemies , Phaser.Physics.ARCADE);
        this.physics.enable(Enemies1 , Phaser.Physics.ARCADE);
        this.physics.enable(Goal , Phaser.Physics.ARCADE);

        sprite.body.collideWorldBounds=true;
        this.physics.arcade.enable(Goal);
        this.physics.arcade.enable(sprite);
        this.physics.arcade.enable(Enemies);
        this.physics.arcade.enable(Enemies1);
        sprite.enableBody = true;
        Enemies.enableBody = true;
        Enemies1.enableBody = true;
        end.enableBody = true;


        cursors = this.input.keyboard.createCursorKeys();
        Enemies.setAll('body.collideWorldBounds', true);
        Enemies.setAll('body.bounce.x', 1);
        Enemies.setAll('body.bounce.y', 1);
        Enemies.setAll('body.minBounceVelocity', 0);

    },

    update: function () {
        this.physics.arcade.collide(sprite, Enemies, this.collisionHandler, null, this);
        this.physics.arcade.collide(sprite, Enemies1, this.collisionHandler2, null, this);
        this.physics.arcade.collide(sprite, Goal, this.collisionHandler3, null, this);
        sprite.body.velocity.x = 0;
        sprite.body.velocity.y = 0;






        if (cursors.up.isDown) {
            sprite.body.velocity.y = -200;
        }

        if (cursors.left.isDown) {
            sprite.body.velocity.x = -200;
        }
        if (cursors.right.isDown) {
            sprite.body.velocity.x = 200;
        }

        if (cursors.down.isDown) {
            sprite.body.velocity.y = 200;
        }

    },

    collisionHandler: function  (obj1, obj2 ) {
        this.game.state.start("Intro8y");

    },
    collisionHandler2: function  (obj1, obj2) {
        this.game.state.start("Intro8y");

    },
    collisionHandler3: function  (obj1, obj2) {
        this.game.state.start("Level2")

    }



};