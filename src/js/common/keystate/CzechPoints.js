var CzechPoints = function (game) {
    this._game = game;
};
var Level = "";


CzechPoints.prototype = {
StartLevel()
{

  this._game.state.start(Level);

},
    setLevel(LeveltoSet)
        {
        Level = LeveltoSet;

            }

};

module.exports = CzechPoints;