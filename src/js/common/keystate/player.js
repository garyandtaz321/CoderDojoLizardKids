var Player = function (game) {
    this._game = game;
};
var KeyState = require("../../common/keystate/Keystate");
var User;

Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;


/*
 Automatically called by World.update
 */
keystate: null,


    Player.prototype.create = function() {
        this._game.physics.startSystem(Phaser.Physics.ARCADE);
        this.sprite = this._game.add.sprite(100, 100, 'walker')
        var pWalk = this.sprite.animations.add('pWalk', [0,1], 10, true);
        pWalk.play('pWalk');


        this.keystate = new KeyState(this._game);
        cursors = this._game.input.keyboard.createCursorKeys();
        console.log(this.keystate)
        this._game.physics.arcade.enable(this.sprite);
        this.sprite.body.collideWorldBounds=true;
    },

    Player.prototype.sprite = null;

    Player.prototype.update = function(collisionCallback) {
        this.keystate.update();
        this.sprite.body.velocity.x = 0;
        this.sprite.body.velocity.y = 0;
        if (cursors.up.isDown) {
            this.sprite.body.velocity.y = -200;

        }
        else {

        }

        if (cursors.left.isDown) {

            this.sprite.body.velocity.x = -200;


        }
        else if (cursors.right.isDown) {

            this.sprite.body.velocity.x = 200;
        }

        else if (cursors.down.isDown)
        {
            this.sprite.body.velocity.y = 200;

        }

        collisionCallback();
    };

    Player.prototype.getSprite = function() {
        return this.sprite;
    }


module.exports = Player;