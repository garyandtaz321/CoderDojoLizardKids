var Player = require('../models/player');

var Game = function () {
    this.testentity = null;
};

var sprite;
var Enemies;
var Enemies1;
var points;
var tween1;
var tween2;
var tweenB;
var group;
var end;
this.bmd = null;
var cursors;

var Keys;
var right;
var left;
module.exports = Game;

Game.prototype = {

    create: function () {

       Enemies =  this.game.make.group();
        Enemies1 =  this.game.make.group();
        for (var i = 0; i < 30; i++)
        {
            var s = Enemies.create(this.game.rnd.integerInRange(100, 700), this.game.rnd.integerInRange(32, 200), 'ZAMBIE');

            this.game.physics.enable(s, Phaser.Physics.ARCADE);
            s.body.velocity.x = this.game.rnd.integerInRange(-200, 200);
            s.body.velocity.y = this.game.rnd.integerInRange(-200, 200);
        }



        this.physics.startSystem(Phaser.Physics.ARCADE);
        sprite = this.add.sprite(567, 400, 'Player');
        // Spawning

        end = this.add.sprite(800, 0, 'end')



        this.physics.enable(sprite , Phaser.Physics.ARCADE);
        this.physics.enable(Enemies , Phaser.Physics.ARCADE);
        this.physics.enable(Enemies1 , Phaser.Physics.ARCADE);

        sprite.body.collideWorldBounds=true;

        this.physics.arcade.enable(sprite);
        this.physics.arcade.enable(Enemies);
        this.physics.arcade.enable(Enemies1);
        sprite.enableBody = true;
        Enemies.enableBody = true;
        Enemies1.enableBody = true;
        end.enableBody = true;
        cursors = this.input.keyboard.createCursorKeys();


    },

    update: function () {
        this.physics.arcade.collide(sprite, Enemies, this.collisionHandler, null, this);
        this.physics.arcade.collide(sprite, Enemies1, this.collisionHandler2, null, this);
        sprite.body.velocity.x = 0;
        sprite.body.velocity.y = 0;


        this.game.debug.bodyInfo(sprite, 32, 32);
        this.game.debug.bodyInfo(Enemies, 32, 32);
        this.game.debug.bodyInfo(Enemies1, 32, 32);
        this.game.debug.spriteInfo(sprite);



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

    collisionHandler: function  (obj1, obj2 ) {
        this.game.state.start("Intro8y");

    },
    collisionHandler2: function  (obj1, obj2) {
        this.game.state.start("Intro8y");

    },
    tween11: function() {
        tween1 = this.game.add.tween(Enemies);
        tween1.to({x: [500, 500, 400, 400], y: [250, 150, 150, 250]}, 2000, "Linear").loop(true);
        tween1.start();
    },


};