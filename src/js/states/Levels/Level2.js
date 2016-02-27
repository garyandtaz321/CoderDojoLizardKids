
var Level2 = function () {};

module.exports = Level2;


var sprite;
var bullets;
var Enemies

var fireRate = 100;
var nextFire = 0;

Level2.prototype = {

    create: function() {
        Enemies =  this.game.make.group();

        for (var i = 0; i < 5; i++)
        {
            var s = Enemies.create(this.game.rnd.integerInRange(456, 300), this.game.rnd.integerInRange(25, 345), 'ZAMBIE');

            this.game.physics.enable(s, Phaser.Physics.ARCADE);
            s.body.velocity.x = this.game.rnd.integerInRange(-300, 234);
            s.body.velocity.y = this.game.rnd.integerInRange(-123, 345);
        }
    this.game.physics.startSystem(Phaser.Physics.ARCADE);



    bullets = this.game.add.group();
    bullets.enableBody = true;
    bullets.physicsBodyType = Phaser.Physics.ARCADE;

    bullets.createMultiple(50, 'bullet');
    bullets.setAll('checkWorldBounds', true);
    bullets.setAll('outOfBoundsKill', true);

        Enemies.setAll('body.collideWorldBounds', true);
    sprite = this.game.add.sprite(400, 300, 'Player');
    sprite.anchor.set(0.5);

    this.game.physics.enable(sprite, Phaser.Physics.ARCADE);

    sprite.body.allowRotation = false;

},







    update: function() {
        this.physics.arcade.collide(bullets, Enemies, this.collisionHandler, null, this);
    sprite.rotation = this.game.physics.arcade.angleToPointer(sprite);

    if (this.game.input.activePointer.isDown)
    {
        this.fire();
    }

},

    fire: function() {

        if (this.game.time.now > nextFire && bullets.countDead() > 0)
        {
            nextFire = this.game.time.now + fireRate;

            var bullet = bullets.getFirstDead();

            bullet.reset(sprite.x - 8, sprite.y - 8);

            this.game.physics.arcade.moveToPointer(bullet, 300);
        }

    },

    collisionHandler: function  (obj1, obj2 ) {
        this.game.state.start("Intro8y");

    },

};

