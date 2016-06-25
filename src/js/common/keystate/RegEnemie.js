var RegEnemie = function (game) {
    this._game = game;
};
var Enemies;

RegEnemie.prototype = {


create()
    {
        Enemies = this._game.make.group();
        for (var i = 0; i < 5; i++) {
            var alien = Enemies.create(this._game.rnd.integerInRange(600, 600), this._game.rnd.integerInRange(25, 345), 'ZAMBIE');

            this._game.physics.enable(alien, Phaser.Physics.ARCADE);
            alien.body.velocity.x = this._game.rnd.integerInRange(-300, 234);
            alien.body.velocity.y = this._game.rnd.integerInRange(-123, 345);
        }


    },

    getEnemie()
    {



return Enemies;
    },


};

module.exports = RegEnemie;