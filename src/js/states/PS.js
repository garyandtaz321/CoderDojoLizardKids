var PS = function () {};

module.exports = PS;
var sprite;
PS.prototype = {

    create: function () {
        this.music = this.game.add.audio('EES');
        this.music.volume = 1;
        this.music.loop = true;
        this.music.play();
        this.asset = this.add.button(0, 0, 'BasructButts', function() {
            this.game.state.start("Menu");
        }, this, 2, 1, 2);
       this.add.sprite(275, 0, 'title');
       sprite = this.add.sprite(400,200, 'ps');

        var x = this.game.width / 2;
        var y = this.game.height / 2;
        cursors = this.input.keyboard.createCursorKeys();
        this.physics.enable(sprite , Phaser.Physics.ARCADE);
        this.game.state.start('EE');
    },

    update: function () {
        sprite.body.velocity.y = -200;
        if (cursors.up.isDown) {
            sprite.body.velocity.y = -200;
        }
        if (cursors.left.isDown) {
            sprite.body.velocity.x = -200;
            console.log('left')
        }
        if (cursors.right.isDown) {
            sprite.body.velocity.x = 200;
        }
        if (cursors.down.isDown) {
            sprite.body.velocity.y = 200;
        }
    },
    shutdown: function () {
        this.music.volume = 1;
        this.music.stop();
    }
};
