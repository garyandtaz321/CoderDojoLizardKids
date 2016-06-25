
var total = 0;
var Score = {


    addToScore: function(number) {
        total += number;
    },

    subtractFromScore: function(number) {
        total -= number;
    },

    total ()
    {


    },

    render (game)
        {

            game.debug.text("Total memes: " + total, 32, 32);
        }

};

module.exports = Score;
