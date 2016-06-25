var Level4 = function () {
    this.testentity = null;
};

module.exports = Level4;
var Enemie1;
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
var  enemyBullet;
//Keystate import
var KeyState = require("../../common/keystate/Keystate");
var Health = require("../../common/keystate/Health");
var HealthCollisions = {
    collided: false,
    locked: false
};

Level4.prototype = {
    keystate: null,
    health: null,
    create: function () {
        Background = this.add.sprite(0, 0, 'BK4');
        this.health = new Health(this.game);
        this.keystate = new KeyState(this.game);
        this.health = new Health(this.game)
        console.log(this.keystate);

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
        this.health.create();


    },
    update: function () {
        sprite.body.velocity.x = 0;
        sprite.body.velocity.y = 0;
        this.physics.arcade.collide(sprite, Goal, this.goalHandler, null, this);

        this.physics.arcade.collide(sprite,enemyBullets, this.KillHandler, null, this);





        if (this.game.time.now > firingTimer) {
            this.enemyFires();
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


        this.health.update();

    },
    goalHandler: function(obj1, obj2) {
        this.game.state.start("Level5");


    },

    spawnGoal: function()
    {
        Goal =  this.add.sprite(0, 0, 'goal');

        this.game.physics.enable(Goal, Phaser.Physics.ARCADE);

    },
    render: function()
    {

        this.game.debug.text("Time left to survive " + this.game.time.events.duration, 32, 32);


    }
};

