var ShooteEnemie = function (game) {
    this._game = game;
};

var Enemies;
var enemyBullets;
var fireRate = 50;
var nextFire = 0;
var firingTimer = 0;
var livingEnemies = [];
ShooteEnemie.prototype = {

player: null,
    create()
    {
        Enemies = this._game.make.group();
        for (var i = 0; i < 5; i++) {
            var alien = Enemies.create(this._game.rnd.integerInRange(600, 600), this._game.rnd.integerInRange(25, 345), 'ZAMBIE');

            this._game.physics.enable(alien, Phaser.Physics.ARCADE);
            alien.body.velocity.x = this._game.rnd.integerInRange(-300, 234);
            alien.body.velocity.y = this._game.rnd.integerInRange(-123, 345);
        }

        enemyBullets = this._game.add.group();
        enemyBullets.enableBody = true;
        enemyBullets.physicsBodyType = Phaser.Physics.ARCADE;
        enemyBullets.createMultiple(30, 'bullet');
        enemyBullets.setAll('outOfBoundsKill', 'checkWorldBounds', true);
        // Set Enemie Thingy
        Enemies.setAll('body.collideWorldBounds', true);
        Enemies.setAll('body.bounce.x', 1);
        Enemies.setAll('body.bounce.y', 1);
        Enemies.setAll('body.minBounceVelocity', 0);


    },

    update(spriteads)
    {
        if (this._game.time.now > firingTimer) {
            this.enemyFires(spriteads);
        }



    },
    enemyFires(spriteads)
    {
        enemyBullet = enemyBullets.getFirstExists(false);

        livingEnemies.length = 0;

        Enemies.forEachAlive(function (Enemie1) {

            // put every living enemy in an array
            livingEnemies.push(Enemie1);
        });


        if (enemyBullet && livingEnemies.length > 0) {

            var random = this._game.rnd.integerInRange(0, livingEnemies.length - 1);

            // randomly select one of them
            var shooter = livingEnemies[random , random , random];
            // And fire the bullet from this enemy
            enemyBullet.reset(shooter.body.x, shooter.body.y);

            this._game.physics.arcade.moveToObject(enemyBullet, spriteads, 120);
            firingTimer = this._game.time.now + 2000;
            console.log("fire");
        }


    },

    getEnemie()
    {

return Enemies;
    },
    destroy()
    {

       Enemies.destroy() ;
    }


};




module.exports = ShooteEnemie;