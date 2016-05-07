var Level4 = function () {
    this.testentity = null;
};

module.exports = Level4;
var Enemie1;
var cursors;
var enemyBullets;
var fireRate = 50;
var nextFire = 0;
var firingTimer = 0;
var livingEnemies = [];
var sprite;
var Goal;
var Background;
var Health;
var L = 0;
var diminish;
var diminish1;
var diminish2;
var  enemyBullet

var HealthCollisions = {
    collided: false,
    locked: false
};

Level4.prototype = {

    create: function () {
        Background = this.add.sprite(0, 0, 'BK4');
        Health = this.game.add.sprite(100, 100, 'liverroni');


        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        Enemie1 = this.game.make.group();
        cursors = this.input.keyboard.createCursorKeys();
        for (var i = 0; i < 1; i++) {
            var alien = Enemie1.create(this.game.rnd.integerInRange(600, 600), this.game.rnd.integerInRange(25, 345), 'ZAMBIE');

            this.game.physics.enable(alien, Phaser.Physics.ARCADE);
            alien.body.velocity.x = this.game.rnd.integerInRange(-300, 234);
            alien.body.velocity.y = this.game.rnd.integerInRange(-123, 345);
        }

            this.game.physics.enable(Enemie1, Phaser.Physics.ARCADE);

// Random Velocraptors


            this.physics.arcade.enable(Enemie1);
            // Set Enemie Thingy
            Enemie1.setAll('body.collideWorldBounds', true);
            Enemie1.setAll('body.bounce.x', 1);
            Enemie1.setAll('body.bounce.y', 1);
            Enemie1.setAll('body.minBounceVelocity', 0);

// Set enemy bullet thingy
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
        this.game.time.events.add(Phaser.Timer.SECOND * 10, this.spawnGoal, this);

    },
    update: function () {
        sprite.body.velocity.x = 0;
        sprite.body.velocity.y = 0;
        this.physics.arcade.collide(sprite, Goal, this.goalHandler, null, this);

        HealthCollisions.collided = this.physics.arcade.collide(sprite,enemyBullets, this.KillHandler, null, this);

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
        if (this.game.time.now > firingTimer) {
            this.enemyFires();
        }
        if (cursors.up.isDown) {
            sprite.body.velocity.y = -200;
            sprite.body.velocity.y = -200;

        }


        if (cursors.left.isDown) {

            sprite.body.velocity.x = -200;


        }
        else if (cursors.right.isDown) {

            sprite.body.velocity.x = 200;
        }

        else if (cursors.down.isDown) {
            sprite.body.velocity.y = 200;
            sprite.body.velocity.y = 200;

        }
        else {
            sprite.body.acceleration.set(0);
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
    collisionHandler7: function (obj1, obj2) {

    },


    KillHandler: function(obj1, obj2) {
        if (HealthCollisions.locked) {
            return;
        }

        L++;
        console.log(L);
        HealthCollisions.locked = true;
    },
    goalHandler: function(obj1, obj2) {
        this.game.state.start("Level5");


    },

    spawnGoal: function()
    {
        Goal =  this.add.sprite(0, 0, 'goal')

        this.game.physics.enable(Goal, Phaser.Physics.ARCADE);

    },
    render: function()
    {

        this.game.debug.text("Time left to survive " + this.game.time.events.duration, 32, 32);


    },
};

