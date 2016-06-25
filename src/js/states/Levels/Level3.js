var Level3 = function () {
    this.testentity = null;
};

module.exports = Level3;
var Enemie1;
var Enemie2;
var Enemie3;
var Enemie4;
var Enemie5;
var Enemie6;

var KILLS = 0;
var sprite;
var Health;
var L = 0;
var enemyBullets;
var Keys;
var Background;
var bullets;
var explosions;
var explosion;
var fireRate = 50;
var nextFire = 0;
var firingTimer = 0;
var livingEnemies = [];
var HealthCollisions = {
    collided: false,
    locked: false
};
//Keystate import
var KeyState = require("../../common/keystate/Keystate");

Level3.prototype = {
    keystate: null,
    create: function () {
        Background = this.add.sprite(0, 0, 'BK3');
        Health = this.game.add.sprite(100, 100, 'liverroni');
        this.keystate = new KeyState(this.game);
        console.log(this.keystate);

        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        Enemie1 = this.game.make.group();
        Enemie2 = this.game.make.group();
        Enemie3 = this.game.make.group();
        Enemie4 = this.game.make.group();
        Enemie5 = this.game.make.group();
        Enemie6 = this.game.make.group();
        cursors = this.input.keyboard.createCursorKeys();


        for (var i = 0; i < 6; i++)
        {
            var alien = Enemie1.create(this.game.rnd.integerInRange(600, 600), this.game.rnd.integerInRange(25, 345), 'ZAMBIE');

            this.game.physics.enable(alien, Phaser.Physics.ARCADE);
            alien.body.velocity.x = this.game.rnd.integerInRange(-300, 234);
            alien.body.velocity.y = this.game.rnd.integerInRange(-123, 345);
        }


        this.game.physics.enable(Enemie1, Enemie2, Enemie3, Enemie4, Enemie5, Enemie6, Phaser.Physics.ARCADE);

// Random Velocraptors


        this.physics.arcade.enable(Enemie1, Enemie2, Enemie3, Enemie4, Enemie5, Enemie6);
        Enemie1.setAll('body.collideWorldBounds', true);
        Enemie1.setAll('body.bounce.x', 1);
        Enemie1.setAll('body.bounce.y', 1);
        Enemie1.setAll('body.minBounceVelocity', 0);

        bullets = this.game.add.group();
        bullets.enableBody = true;
        bullets.physicsBodyType = Phaser.Physics.ARCADE;

        bullets.createMultiple(2000, 'bullet');
        bullets.setAll('checkWorldBounds', true);
        bullets.setAll('outOfBoundsKill', true);

        enemyBullets = this.game.add.group();
        enemyBullets.enableBody = true;
        enemyBullets.physicsBodyType = Phaser.Physics.ARCADE;
        enemyBullets.createMultiple(30, 'bullet');

        enemyBullets.setAll('outOfBoundsKill', true);
        enemyBullets.setAll('checkWorldBounds', true);

        sprite = this.add.sprite(1632, 1632, 'walker');
        var pWalk = sprite.animations.add('pWalk', [0,1], 10, true);
        pWalk.play('pWalk');



        this.game.physics.enable(sprite, Phaser.Physics.ARCADE);
        sprite.body.collideWorldBounds=true;

        sprite.body.allowRotation = false;
        explosions = this.game.add.group();
        explosions.createMultiple(30, 'kaboom');

    },


    update: function () {
        sprite.body.velocity.x = 0;
        sprite.body.velocity.y = 0;
        this.keystate.update();

        HealthCollisions.collided = this.physics.arcade.collide(sprite,enemyBullets, this.KillHandlers, null, this);

        if (!HealthCollisions.collided) {
            HealthCollisions.locked = false;
        }
        if (L == 1){
            Health.frame=1;
        } else if(L == 2){
            Health.frame=2;
        }else if(L == 3){
            Health.frame=3;
            this.game.state.start("Intro8y");
            this.game.time.now + 1000

        }

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

        console.log(KILLS)
        if (KILLS == 6) {

            this.game.state.start("Level4");


        } else {


        }


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
        this.physics.arcade.collide(sprite, enemyBullets, this.KillHandlers, null, this);
        this.physics.arcade.overlap(bullets, Enemie1, this.KillHandler, null, this);



        if (this.game.input.activePointer.isDown) {

            this.fire();

        }
        if (this.game.time.now > firingTimer) {
            this.enemyFires();
        }

    },

    fire: function () {

        if (this.game.time.now > nextFire && bullets.countDead() > 0) {
            nextFire = this.game.time.now + fireRate;

            var bullet = bullets.getFirstDead();

            bullet.reset(sprite.x, sprite.y);

            this.game.physics.arcade.moveToPointer(bullet, 300);
            this.music = this.game.add.audio('GunSound');
            this.music.volume = 1;
            this.music.loop = false;
            this.music.play();
        }

    },



    enemyFires: function () {

        //  Grab the first bullet we can from the pool
        enemyBullet = enemyBullets.getFirstExists(false);

        livingEnemies.length = 0;

        Enemie1.forEachAlive(function (Enemie1) {

            // put every living enemy in an array
            livingEnemies.push(Enemie1);
        });


        if (enemyBullet && livingEnemies.length > 0) {

            var random = this.game.rnd.integerInRange(0, livingEnemies.length - 1);

            // randomly select one of them
            var shooter = livingEnemies[random , random , random];
            // And fire the bullet from this enemy
            enemyBullet.reset(shooter.body.x, shooter.body.y);

            this.game.physics.arcade.moveToObject(enemyBullet, sprite, 120);
            firingTimer = this.game.time.now + 2000;
            console.log("fire");
        }

    },

    collisionHandler: function (obj1, obj2) {
        Enemie1.destroy();

        ++KILLS;

    },
    collisionHandler2: function (obj1, obj2) {
        Enemie2.destroy();

        ++KILLS;
    },
    collisionHandler3: function (obj1, obj2) {
        Enemie3.destroy();

        ++KILLS;
    },
    collisionHandler4: function (obj1, obj2) {
        Enemie4.destroy();

        ++KILLS;
    },
    collisionHandler5: function (obj1, obj2) {
        Enemie5.destroy();

        ++KILLS;
    },
    collisionHandler6: function (obj1, obj2) {
        Enemie6.destroy();

        ++KILLS;
    },
    collisionHandler7: function (obj1, obj2) {
        if (HealthCollisions.locked) {
            return;
        }

        L++;
        console.log(L);
        HealthCollisions.locked = true;
        console.log("IMPACTS");
    },


    KillHandler: function(bullets ,alien) {
        alien.kill();
        ++KILLS;

    },


    render: function()
    {

        this.game.debug.text("Total kills: " + KILLS, 32, 32);


    },
    KillHandlers: function(obj1, obj2) {
        if (HealthCollisions.locked) {
            return;
        }

        L++;
        console.log(L);
        HealthCollisions.locked = true;
        console.log("IMPACT");
    },

};