var PS = function () {};

module.exports = PS;
var sprite;
var salad;
var ps = 0;
var bullets;
var psHealth;
var fireRate = 200;
var nextFire = 0;
var psCollisions = {
    collided: false,
    locked: false
};
PS.prototype = {

    create: function () {
        sprite = this.add.sprite(0,200, 'ps');
        salad = this.add.sprite(400,200,'salad');
        psHealth = this.add.sprite(672,576,'saladHealth');
        salad.scale.x = 4;
        salad.scale.y = 4;
        this.physics.enable(sprite , Phaser.Physics.ARCADE);
        this.physics.enable(salad , Phaser.Physics.ARCADE);
        salad.body.setSize(25, 25, 15, 15);
        cursors = this.input.keyboard.createCursorKeys();
        sprite.body.collideWorldBounds=true;
        salad.body.collideWorldBounds=true;
        bullets = this.game.add.group();
        bullets.enableBody = true;
        bullets.physicsBodyType = Phaser.Physics.ARCADE;
        bullets.createMultiple(50, 'salad');
        bullets.setAll('checkWorldBounds', true);
        bullets.setAll('outOfBoundsKill', true);
        this.game.time.events.loop(2000, function() {  this.game.add.tween(salad).to({x: this.game.world.randomX, y: this.game.world.randomY}, 1750, Phaser.Easing.Quadratic.InOut, true);}, this)
        

    },

    update: function () {
        psCollisions.collided = this.physics.arcade.collide(bullets,salad, this.potatoHandler, null, this);
        this.physics.arcade.collide(sprite, salad, this.KillHandler, null, this);
        sprite.body.velocity.x = 0;
        sprite.body.velocity.y = 0;
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
        if (this.game.input.activePointer.isDown)
        {
            this.fire();
        }
        if (!psCollisions.collided) {
            psCollisions.locked = false;
        }
        if (ps == 5){
            psHealth.frame=2;
        }
        if (ps == 10){
            psHealth.frame=3;
        }
        if (ps == 15){
            psHealth.frame=4;
        }
        if (ps == 20){
            psHealth.frame=5;
        }
        if (ps == 25){
            psHealth.frame=6;
        }
        if (ps == 30){
            psHealth.frame=7;
            salad.rotation += -0.1;
            this.game.time.events.add(Phaser.Timer.SECOND * 3, destroySalad, this);
            function destroySalad(){
                salad.destroy();
                this.game.state.start("Game");
            }
        }







    },
    fire: function() {

        if (this.game.time.now > nextFire && bullets.countDead() > 0) {
            nextFire = this.game.time.now + fireRate;

            var bullet = bullets.getFirstDead();

            bullet.reset(sprite.x - 8, sprite.y - 8);
            this.game.physics.arcade.moveToPointer(bullet, 300);

        }
    },
    /*render: function(){
        this.game.debug.body(salad);
    },*/
    potatoHandler: function  (obj1, obj2 ) {
        if (psCollisions.locked) {
            return;
        }

        ps++;
        console.log(ps);
        psCollisions.locked = true;
    },
    KillHandler: function  (obj1, obj2 ) {
        this.game.state.start('Intro8y');
    }
    /*shutdown: function () {
        this.music.volume = 1;
        this.music.stop();
    }*/
};
