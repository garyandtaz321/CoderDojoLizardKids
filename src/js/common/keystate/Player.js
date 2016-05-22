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
        User = this._game.add.sprite(100, 100, 'walker')
        var pWalk = User.animations.add('pWalk', [0,1], 10, true);
        pWalk.play('pWalk');


        this.keystate = new KeyState(this._game);
        cursors = this._game.input.keyboard.createCursorKeys();
        console.log(this.keystate)
        this._game.physics.arcade.enable(User);
    },

Player.prototype.update = function() {
    this.keystate.update();
    User.body.velocity.x = 0;
    User.body.velocity.y = 0;
    if (cursors.up.isDown) {
        User.body.velocity.y = -200;

    }
    else {

    }

    if (cursors.left.isDown) {

        User.body.velocity.x = -200;


    }
    else if (cursors.right.isDown) {

        User.body.velocity.x = 200;
    }

    else if (cursors.down.isDown)
    {
        User.body.velocity.y = 200;

    }
};


module.exports = Player;
