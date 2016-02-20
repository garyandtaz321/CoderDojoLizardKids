var instruct = function () {};

module.exports = instruct;

instruct.prototype = {



    create: function () {
music: null,
        this.music = this.game.add.audio('Instructsong');
        this.music.volume = 1;
        this.music.loop = true;
        this.music.play();
        this.asset = this.add.button(0, 0, 'BasructButts', function() {
            this.game.state.start("Menu");
        }, this, 2, 1, 2);
        this.add.sprite(275, 0, 'title')

        var x = this.game.width / 2;
        var y = this.game.height / 2;

        var style = { font: "35px Arial", fill: "#ffffff", align: "center" };
        this.text = this.add.text(x - 300, y - 100, "If your finger makes contact with " +
            "\nmore than the desired amount of keys, \nthan you are anti-alive\n" +
            "In this case the desired amount is \ntwo or more \ndo good with this advice my sweet child", style);


        this.game.state.start('instruct');
    },
    shutdown: function () {
        this.music.volume = 0;
        this.music.stop();
    }
};
