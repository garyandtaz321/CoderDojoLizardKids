var Player = require('../models/player');

var Game = function () {
    this.testentity = null;
}

var sprite;
var Ene1;
var Ene2;
var Ene3;
var Ene4;
var Ene5;

var group;
var cursors;
var Keys;
var right;
var left;
module.exports = Game;

Game.prototype = {

    create: function () {




        sprite = this.add.group();
        sprite.enableBody = true;
        this.physics.startSystem(Phaser.Physics.ARCADE);
        sprite = this.add.sprite(567, 400, 'Player');
        Ene1 = this.add.sprite(100, 156, 'ZAMBIE');
        Ene2 = this.add.sprite(200, 235, 'ZAMBIE');
        Ene3 = this.add.sprite(300, 345, 'ZAMBIE');
        Ene4 = this.add.sprite(600, 523, 'ZAMBIE');
        Ene5 = this.add.sprite(750, 456, 'ZAMBIE');
        this.physics.enable(sprite , Phaser.Physics.ARCADE);
        this.physics.enable(Ene1 , Phaser.Physics.ARCADE);
        this.physics.enable(Ene2 , Phaser.Physics.ARCADE);
        this.physics.enable(Ene3 , Phaser.Physics.ARCADE);
        this.physics.enable(Ene4 , Phaser.Physics.ARCADE);
        this.physics.enable(Ene5 , Phaser.Physics.ARCADE);

        sprite.body.collideWorldBounds=true;

        this.physics.arcade.enable(sprite);
        this.physics.arcade.enable(Ene1);
        this.physics.arcade.enable(Ene2);
        this.physics.arcade.enable(Ene3);
        this.physics.arcade.enable(Ene4);
        this.physics.arcade.enable(Ene5);
        sprite.body.setSize(220, 10, 0, 0);
        Ene1.body.setSize(220, 10, 0, 0);
        Ene2.body.setSize(220, 10, 0, 0);
        Ene3.body.setSize(220, 10, 0, 0);
        Ene4.body.setSize(220, 10, 0, 0);
        Ene5.body.setSize(220, 10, 0, 0);
        cursors = this.input.keyboard.createCursorKeys();
        right = this.input.keyboard.addKey(Phaser.Keyboard.A);
        left = this.input.keyboard.addKey(Phaser.Keyboard.D);

    },

    update: function () {
        sprite.body.velocity.x = 0;
        sprite.body.velocity.y = 0;
        this.physics.arcade.collide(Player, Ene1, this.collisionHandler, null, this);
        this.physics.arcade.collide(Player, Ene2, this.collisionHandler, null, this);
        this.physics.arcade.collide(Player, Ene3, this.collisionHandler, null, this);
        this.physics.arcade.collide(Player, Ene4, this.collisionHandler, null, this);
        this.physics.arcade.collide(Player, Ene5, this.collisionHandler, null, this);

        Ene1.angle += 1;

        Ene2.angle += 1;

        Ene3.angle += 1;

        Ene4.angle += 1;
        Ene5.angle += 1;




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

    }
};