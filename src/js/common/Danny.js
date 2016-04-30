const Danny = function (game) {
    this._game = game;
};

module.exports = Danny;
Danny.prototype = {
    _timer: null,
    _lazer: null,
    _boss: null,
    create(){
        _boss = this.add.sprite(100,0,'Devito');
        function lazerBarrage() {
            _lazer = this.add.sprite(245, 225, 'lazer');
            _lazer = this.add.sprite(380, 215, 'lazer');
            this.physics.enable(_lazer, Phaser.Physics.ARCADE);
            _lazer.body.velocity.y = 200;
            _lazer.body.velocity.x = 0;
            this.sound.play('lazerN');
            console.log('lazerz');
        }
    },
    update() {
        this._timer = setTimeout(() => {
            this.create();
        }, 3000);

    }
};

