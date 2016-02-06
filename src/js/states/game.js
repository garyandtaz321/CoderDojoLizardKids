var Player = require('../models/player');

var Game = function () {
    this.testentity = null;
};

var sprite;
var Enemies;
var Enemies1;
var points;
var tween1;
var tweenB;
var group;
this.bmd = null;
var cursors;

var Keys;
var right;
var left;
module.exports = Game;

Game.prototype = {

    create: function () {
        Enemies = this.add.group();
        Enemies1 = this.add.group();


        Enemies.create( 100 , 436, 'ZAMBIE');
        Enemies.create( 200 , 128, 'ZAMBIE');
        Enemies.create( 300 , 345, 'ZAMBIE');
        Enemies1.create( 400 , 235, 'ZAMBIE');
        Enemies1.create( 500 , 245, 'ZAMBIE');
        Enemies1.create( 600 , 143, 'ZAMBIE');

        tween1 = this.game.add.tween(Enemies);
        tween1.to({x: [200, 0, 0, 0], y: [200, 0, 0, 0]}, 2000, "Linear").loop(true);
        tween1.start();

        sprite = this.add.group();
        sprite.enableBody = true;
        this.physics.startSystem(Phaser.Physics.ARCADE);
        sprite = this.add.sprite(567, 400, 'Player');

        this.physics.enable(sprite , Phaser.Physics.ARCADE);
        this.physics.enable(Enemies , Phaser.Physics.ARCADE);


        sprite.body.collideWorldBounds=true;

        this.physics.arcade.enable(sprite);
        this.physics.arcade.enable(Enemies);

        sprite.body.setSize(220, 10, 0, 0);
        cursors = this.input.keyboard.createCursorKeys();


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

    collisionHandler: function  (obj1, obj2) {
        this.game.state.start("Preloader");

    },
tween11: function() {
    tween1 = this.game.add.tween(Enemies);
    tween1.to({x: [500, 500, 400, 400], y: [250, 150, 150, 250]}, 2000, "Linear").loop(true);
    tween1.start();
},
};