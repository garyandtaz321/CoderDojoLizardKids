
var Level2 = function () {};

module.exports = Level2;
var Enemie1;
var Enemie2;
var Enemie3;
var Enemie4;
var Enemie5;
var Health;
var L = 0;
var Enemie6;
var KILLS = 0;
var sprite;
var Background;
var Keys;
var bullets;
var explosions;
var explosion;
var fireRate = 50;
var nextFire = 0;
var HealthCollisions = {
    collided: false,
    locked: false
};
//Keystate import
var KeyState = require("../../common/keystate/Keystate");

Level2.prototype = {

    keystate: null,

    create: function() {






    this.game.physics.startSystem(Phaser.Physics.ARCADE);
        Background = this.add.sprite(0, 0, 'BK2');
        Health = this.game.add.sprite(100, 100, 'liverroni');
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        Enemie1 = this.game.make.group();
        Enemie2 = this.game.make.group();
        Enemie3 = this.game.make.group();
        Enemie4 = this.game.make.group();
        Enemie5 = this.game.make.group();
        Enemie6 = this.game.make.group();
        cursors = this.input.keyboard.createCursorKeys();
        this.keystate = new KeyState(this.game);
        for (var i = 0; i < 1; i++)
        {
            var s = Enemie1.create(this.game.rnd.integerInRange(600, 600), this.game.rnd.integerInRange(25, 345), 'ZAMBIE');

            this.game.physics.enable(s, Phaser.Physics.ARCADE);
            s.body.velocity.x = this.game.rnd.integerInRange(-300, 234);
            s.body.velocity.y = this.game.rnd.integerInRange(-123, 345);
        }
        for (var i = 0; i < 1; i++)
        {
            var s = Enemie2.create(this.game.rnd.integerInRange(600, 600), this.game.rnd.integerInRange(25, 345), 'ZAMBIE');

            this.game.physics.enable(s, Phaser.Physics.ARCADE);
            s.body.velocity.x = this.game.rnd.integerInRange(-300, 234);
            s.body.velocity.y = this.game.rnd.integerInRange(-123, 345);
        }
        for (var i = 0; i < 1; i++)
        {
            var s = Enemie3.create(this.game.rnd.integerInRange(600, 600), this.game.rnd.integerInRange(25, 345), 'ZAMBIE');

            this.game.physics.enable(s, Phaser.Physics.ARCADE);
            s.body.velocity.x = this.game.rnd.integerInRange(-300, 234);
            s.body.velocity.y = this.game.rnd.integerInRange(-123, 345);
        }
        for (var i = 0; i < 1; i++)
        {
            var s = Enemie4.create(this.game.rnd.integerInRange(600, 600), this.game.rnd.integerInRange(25, 345), 'ZAMBIE');

            this.game.physics.enable(s, Phaser.Physics.ARCADE);
            s.body.velocity.x = this.game.rnd.integerInRange(-300, 234);
            s.body.velocity.y = this.game.rnd.integerInRange(-123, 345);
        }
        for (var i = 0; i < 1; i++)
        {
            var s = Enemie5.create(this.game.rnd.integerInRange(600, 600), this.game.rnd.integerInRange(25, 345), 'ZAMBIE');

            this.game.physics.enable(s, Phaser.Physics.ARCADE);
            s.body.velocity.x = this.game.rnd.integerInRange(-300, 234);
            s.body.velocity.y = this.game.rnd.integerInRange(-123, 345);
        }
        for (var i = 0; i < 1; i++)
        {
            var s = Enemie6.create(this.game.rnd.integerInRange(600, 600), this.game.rnd.integerInRange(25, 345), 'ZAMBIE');

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

    bullets.createMultiple(2000, 'bullet');
    bullets.setAll('checkWorldBounds', true);
    bullets.setAll('outOfBoundsKill', true);


        sprite = this.add.sprite(1632, 1632, 'walker');
        var pWalk = sprite.animations.add('pWalk', [0,1], 10, true);
        pWalk.play('pWalk');



    this.game.physics.enable(sprite, Phaser.Physics.ARCADE);
        sprite.body.collideWorldBounds=true;

    sprite.body.allowRotation = false;
        explosions = this.game.add.group();
        explosions.createMultiple(30, 'kaboom');

},







    update: function() {
        sprite.body.velocity.x = 0;
        sprite.body.velocity.y = 0;
        HealthCollisions.collided = this.physics.arcade.collide(sprite,Enemie1 || Enemie2 || Enemie3 ||Enemie4 ||Enemie5 || Enemie6, this.collisionHandler7, null, this);
        this.keystate.update();
        if (cursors.up.isDown) {
            sprite.body.velocity.y = -200;
        }
        if (cursors.left.isDown) {
            sprite.body.velocity.x = -200;
        }
        if (cursors.right.isDown) {

            sprite.body.velocity.x = 200;
        }

        if (cursors.down.isDown) {
            sprite.body.velocity.y = 200;
        }


        console.log(KILLS);
if (KILLS == 6)
{

    this.game.state.start("Level3");


}else{




}

        this.physics.arcade.collide(bullets, Enemie1, this.collisionHandler, null, this);
        this.physics.arcade.collide(bullets, Enemie2, this.collisionHandler2, null, this);
        this.physics.arcade.collide(bullets, Enemie3, this.collisionHandler3, null, this);
        this.physics.arcade.collide(bullets, Enemie4, this.collisionHandler4, null, this);
        this.physics.arcade.collide(bullets, Enemie5, this.collisionHandler5, null, this);
        this.physics.arcade.collide(bullets, Enemie6, this.collisionHandler6, null, this);
        this.physics.arcade.collide(sprite, Enemie1, this.collisionHandler7, null, this);
        this.physics.arcade.collide(sprite, Enemie2, this.collisionHandler7, null, this);
        this.physics.arcade.collide(sprite, Enemie3, this.collisionHandler7, null, this);
        this.physics.arcade.collide(sprite, Enemie4, this.collisionHandler7, null, this);
        this.physics.arcade.collide(sprite, Enemie5, this.collisionHandler7, null, this);
        this.physics.arcade.collide(sprite, Enemie6, this.collisionHandler7, null, this);



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

            bullet.reset(sprite.x , sprite.y );

            this.game.physics.arcade.moveToPointer(bullet, 300);
            this.music = this.game.add.audio('GunSound');
            this.music.volume = 1;
            this.music.loop = false;
            this.music.play();
        }

    },

    collisionHandler: function  (obj1, obj2 ) {
     Enemie1.destroy();

        ++KILLS;

    },
    collisionHandler2: function  (obj1, obj2 ) {
        Enemie2.destroy();

        ++KILLS;
    },
    collisionHandler3: function  (obj1, obj2 ) {
        Enemie3.destroy();

        ++KILLS;
    },
    collisionHandler4: function  (obj1, obj2 ) {
        Enemie4.destroy();

        ++KILLS;
    },
    collisionHandler5: function  (obj1, obj2 ) {
        Enemie5.destroy();

        ++KILLS;
    },
    collisionHandler6: function  (obj1, obj2 ) {
        Enemie6.destroy();

        ++KILLS;
    },
    collisionHandler7: function  (obj1, obj2 ) {
        if (HealthCollisions.locked) {
            return;
        }

        L++;
        console.log(L);
        console.log("IMPACT");
        HealthCollisions.locked = true;
    },


    render: function()
    {

        this.game.debug.text("Total kills: " + KILLS, 32, 32);


    },


};

