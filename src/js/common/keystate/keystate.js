const Keystate = function (game) {
    this._game = game;
};

module.exports = Keystate;
Keystate.prototype = {
    _fingers_lifted: false,
    _timer: null,
    _keys_down: 0,
    update() {
        this._keys_down = 0;
        // Check keys
        if (cursors.left.isDown){
            this._keys_down = this._keys_down + 1;
            console.log('left');
        }
        if (cursors.up.isDown){
            this._keys_down++;
        }
        if (cursors.right.isDown ){
            this._keys_down++;
        }
        if (cursors.down.isDown) {
            this._keys_down++;
        }

        if (this._keys_down > 1) {
            clearTimeout(this._timer);
            this._timer = null;
            console.log('cleared')
        } else if (this._timer === null) {
            this._timer = setTimeout(() => {
                this._call();
            }, 1000);
        }
    },
    onFingersLifted(callback) {
        this._fingers_lifted = callback;
    },
    _call() {
        console.log("FINGERS LIFTED!");
        if (!this._fingers_lifted) {
            this._game.state.start("Intro8y");
        }

        this._fingers_lifted();
    }
};

