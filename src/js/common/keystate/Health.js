const Health = function (game) {
    this._game = game;
};

var Bar;
var L = 0;
module.exports = Health;
var Locked = false;

Health.prototype = {

    create () {
        Bar = this._game.add.sprite(345, 100, 'liverroni')
console.log(Locked);

    },
    update()
    {
        console.log(Locked);
if (Locked == false)
{
++L;
    Locked = true;
}else if(Locked == true){
    setTimeout(this.Unlock, 2000)
}



        if (L == 1){
            Bar.frame=1;
        } else if(L == 2){
            Bar.frame=2;
        }else if(L == 3){
            Bar.frame=3;
            this._game.state.start("Intro8y");
            this._game.time.now + 1000

        }

    },

Unlock()
{

Locked = false;

},
};




