var Intro8y = function () {};

module.exports = Intro8y;

Intro8y.prototype = {



    create: function () {
        this.add.sprite(0, 0, 'end');
        this.asset = this.add.sprite(100, 60, 'Devito');

        this.asset.alpha = 0;
        this.faded_in = false;

        //Play gameboop
        this.music = this.game.add.audio("Laugh");
        this.music.volume = 1;
        this.music.loop = false;
        this.music.play();

    },
    update: function () {
        if (this.asset.alpha <1 && !this.faded_in) {
            this.asset.alpha+=0.01;
        } else if(this.asset.alpha >= 1) {
            this.faded_in = true;
        }
        if(this.faded_in) {
            this.asset.alpha -= 0.01;
        }
        if (this.asset.alpha < 0) {
            this.game.state.start('Boss');
        }
    }
};