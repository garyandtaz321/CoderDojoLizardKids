var Win = function () {};

module.exports = Win

Win.prototype = {


    create: function () {
        this.add.sprite(0, 0, 'Winner');

        this.music = this.game.add.audio('winSong');
        this.music.volume = 1;
        this.music.loop = true;
        this.music.play();


    }

};
