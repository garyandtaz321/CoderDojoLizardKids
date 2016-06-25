var UniversalCollisionHandler = function (game) {
    this._game = game;
};



UniversalCollisionHandler.prototype = {

    create()
    {
        this._game.physics.startSystem(Phaser.Physics.ARCADE);


    },

    update(collisionCallback) {

        collisionCallback();
    },
};


module.exports = UniversalCollisionHandler;