
var Level2 = function () {};

module.exports = Level2;
var Enemie1;
var Enemie2;
var Enemie3;
var Enemie4;
var Enemie5;
var Enemie6;

var sprite;
var bullets;
var explosions;
var fireRate = 100;
var nextFire = 0;

Level2.prototype = {



    create: function() {






    this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        Enemie1 = this.game.make.group();
        Enemie2 = this.game.make.group();
        Enemie3 = this.game.make.group();
        Enemie4 = this.game.make.group();
        Enemie5 = this.game.make.group();
        Enemie6 = this.game.make.group();
        for (var i = 0; i < 2; i++)
        {
            var s = Enemie1.create(this.game.rnd.integerInRange(456, 300), this.game.rnd.integerInRange(25, 345), 'ZAMBIE');

            this.game.physics.enable(s, Phaser.Physics.ARCADE);
            s.body.velocity.x = this.game.rnd.integerInRange(-300, 234);
            s.body.velocity.y = this.game.rnd.integerInRange(-123, 345);
        }
        for (var i = 0; i < 2; i++)
        {
            var s = Enemie2.create(this.game.rnd.integerInRange(456, 300), this.game.rnd.integerInRange(25, 345), 'ZAMBIE');

            this.game.physics.enable(s, Phaser.Physics.ARCADE);
            s.body.velocity.x = this.game.rnd.integerInRange(-300, 234);
            s.body.velocity.y = this.game.rnd.integerInRange(-123, 345);
        }
        for (var i = 0; i < 2; i++)
        {
            var s = Enemie3.create(this.game.rnd.integerInRange(456, 300), this.game.rnd.integerInRange(25, 345), 'ZAMBIE');

            this.game.physics.enable(s, Phaser.Physics.ARCADE);
            s.body.velocity.x = this.game.rnd.integerInRange(-300, 234);
            s.body.velocity.y = this.game.rnd.integerInRange(-123, 345);
        }
        for (var i = 0; i < 2; i++)
        {
            var s = Enemie4.create(this.game.rnd.integerInRange(456, 300), this.game.rnd.integerInRange(25, 345), 'ZAMBIE');

            this.game.physics.enable(s, Phaser.Physics.ARCADE);
            s.body.velocity.x = this.game.rnd.integerInRange(-300, 234);
            s.body.velocity.y = this.game.rnd.integerInRange(-123, 345);
        }
        for (var i = 0; i < 2; i++)
        {
            var s = Enemie5.create(this.game.rnd.integerInRange(456, 300), this.game.rnd.integerInRange(25, 345), 'ZAMBIE');

            this.game.physics.enable(s, Phaser.Physics.ARCADE);
            s.body.velocity.x = this.game.rnd.integerInRange(-300, 234);
            s.body.velocity.y = this.game.rnd.integerInRange(-123, 345);
        }
        for (var i = 0; i < 2; i++)
        {
            var s = Enemie6.create(this.game.rnd.integerInRange(456, 300), this.game.rnd.integerInRange(25, 345), 'ZAMBIE');

            this.game.physics.enable(s, Phaser.Physics.ARCADE);
            s.body.velocity.x = this.game.rnd.integerInRange(-300, 234);
            s.body.velocity.y = this.game.rnd.integerInRange(-123, 345);
        }
        Enemie1.setAll('body.collideWorldBounds', true);
        Enemie1.setAll('body.bounce.x', 1);
        Enemie1.setAll('body.bounce.y', 1);
        Enemie1.setAll('body.minBounceVelocity', 0);

// Enemies 2
        Enemie2.setAll('body.collideWorldBounds', true);
        Enemie2.setAll('body.bounce.x', 1);
        Enemie2.setAll('body.bounce.y', 1);
        Enemie2.setAll('body.minBounceVelocity', 0);
// Enemies 3
        Enemie3.setAll('body.collideWorldBounds', true);
        Enemie3.setAll('body.bounce.x', 1);
        Enemie3.setAll('body.bounce.y', 1);
        Enemie3.setAll('body.minBounceVelocity', 0);
// Enemies 4
        Enemie4.setAll('body.collideWorldBounds', true);
        Enemie4.setAll('body.bounce.x', 1);
        Enemie4.setAll('body.bounce.y', 1);
        Enemie4.setAll('body.minBounceVelocity', 0);
// Enemies 5
        Enemie5.setAll('body.collideWorldBounds', true);
        Enemie5.setAll('body.bounce.x', 1);
        Enemie5.setAll('body.bounce.y', 1);
        Enemie5.setAll('body.minBounceVelocity', 0);

// Enemies 6
        Enemie6.setAll('body.bounce.x', 1);
        Enemie6.setAll('body.bounce.y', 1);
        Enemie6.setAll('body.minBounceVelocity', 0);
        Enemie6.setAll('body.collideWorldBounds', true);



        this.game.physics.enable(Enemie1,Enemie2,Enemie3,Enemie4,Enemie5,Enemie6,  Phaser.Physics.ARCADE);

// Random Velocraptors


        this.physics.arcade.enable(Enemie1, Enemie2, Enemie3, Enemie4 ,Enemie5, Enemie6);



        bullets = this.game.add.group();
    bullets.enableBody = true;
    bullets.physicsBodyType = Phaser.Physics.ARCADE;

    bullets.createMultiple(50, 'bullet');
    bullets.setAll('checkWorldBounds', true);
    bullets.setAll('outOfBoundsKill', true);


    sprite = this.game.add.sprite(400, 300, 'Player');
    sprite.anchor.set(0.5);

    this.game.physics.enable(sprite, Phaser.Physics.ARCADE);

    sprite.body.allowRotation = false;
        explosions = this.game.add.group();
        explosions.createMultiple(30, 'kaboom');

},







    update: function() {

    sprite.rotation = this.game.physics.arcade.angleToPointer(sprite);
        this.physics.arcade.collide(bullets, Enemie1, this.collisionHandler, null, this);
        this.physics.arcade.collide(bullets, Enemie2, this.collisionHandler2, null, this);
        this.physics.arcade.collide(bullets, Enemie3, this.collisionHandler3, null, this);
        this.physics.arcade.collide(bullets, Enemie4, this.collisionHandler4, null, this);
        this.physics.arcade.collide(bullets, Enemie5, this.collisionHandler5, null, this);
        this.physics.arcade.collide(bullets, Enemie6, this.collisionHandler6, null, this);


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
            this.music = this.game.add.audio('GunSound');
            this.music.volume = 1;
            this.music.loop = false;
            this.music.play();
        }

    },

    collisionHandler: function  (obj1, obj2 ) {
     Enemie1.destroy();

    },
    collisionHandler2: function  (obj1, obj2 ) {
        Enemie2.destroy();

    },
    collisionHandler3: function  (obj1, obj2 ) {
        Enemie3.destroy();

    },
    collisionHandler4: function  (obj1, obj2 ) {
        Enemie4.destroy();

    },
    collisionHandler5: function  (obj1, obj2 ) {
        Enemie5.destroy();

    },
    collisionHandler6: function  (obj1, obj2 ) {
        Enemie6.destroy();

    },
};

