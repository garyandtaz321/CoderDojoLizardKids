/**
 * Created by Josh on 5/7/2016.
 */
const Attack = function (game) {
    this._game = game;
};
module.exports = Attack;
Attack.prototype = {
    _attack: null,
    create (){
        for(i = 0; i <= 300; i + 5)
        this.game.time.events.add(Phaser.Timer.SECOND * i, addAttack, this);
        function addAttack(){
            _attack = this.add.sprite(20, 300,'attack');
            var flash = _attack.animations.add('flash', [0,1], 2, true);
            flash.play('flash');
            this.physics.enable(_attack, Phaser.Physics.ARCADE);
            _attack.scale.x = 1/2;
            _attack.scale.y = 1/2;
        }
    },
    update() {
        this.physics.arcade.collide(sprite, _attack, this.collisionHandler2, null, this);
    }
};