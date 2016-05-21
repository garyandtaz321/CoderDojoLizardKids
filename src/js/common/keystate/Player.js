const Player = function (game) {
    this._game = game;
};
module.exports = Player;

var Player

Player.prototype = {
create()
{
    this._game.physics.startSystem(Phaser.Physics.ARCADE);
    Player = this.add.sprite(400, 300, 'walker');


}
}