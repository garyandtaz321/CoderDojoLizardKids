var Boss = function () {};

module.exports = Boss;

var sprite;
var boss;
var lazer;
var tween1;
var back;
var attack;
var attack2;
var attack3;
var attack4;
var attack5;
var attack6;
var attack7;
var attack8;
var attack9;
var attack10;
var attack11;
var attack12;
var attack13;
var health;
var sweat;
Boss.prototype = {



    create: function () {
        this.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.stage.backgroundColor = '#8B0000';
        //back = this.add.sprite(400, 300, 'bossBack');
        //var spook = back.animations.add('spook', [0,1,2,3,4,5,6,7], 30, true);
        //spook.play('spook')orb;



        sprite = this.add.sprite(567, 400, 'walker');
        health = this.add.sprite(0,0, 'hb');
        sweat = this.add.sprite(0,40, 'sweat');
        var diminish = health.animations.add('diminish', [1,2], 5, true);
        var pWalk = sprite.animations.add('pWalk', [0,1], 10, true);
        pWalk.play('pWalk');
        attack = this.add.sprite(20, 300,'attack');
        var flash = attack.animations.add('flash', [0,1], 2, true);
        flash.play('flash');
        attack.scale.x = 1/2;
        attack.scale.y = 1/2;
        attack.anchor.x = 0;
        attack.anchor.y = 0;
        this.game.time.events.add(Phaser.Timer.SECOND * 10, addAttack2, this);
        function addAttack2(){
            attack2 = this.add.sprite(20, 300,'attack');
            var flash = attack2.animations.add('flash', [0,1], 2, true);
            flash.play('flash');
            this.physics.enable(attack2, Phaser.Physics.ARCADE);
            attack2.scale.x = 1/2;
            attack2.scale.y = 1/2;
        }
        this.game.time.events.add(Phaser.Timer.SECOND * 15, addAttack3, this);
        function addAttack3(){
            attack3 = this.add.sprite(300, 300,'attack');
            var flash = attack3.animations.add('flash', [0,1], 2, true);
            flash.play('flash');
            this.physics.enable(attack3, Phaser.Physics.ARCADE);
            attack3.scale.x = 1/2;
            attack3.scale.y = 1/2;
        }
        this.game.time.events.add(Phaser.Timer.SECOND * 20, addAttack4, this);
        function addAttack4(){
            attack4 = this.add.sprite(400, 300,'attack');
            var flash = attack4.animations.add('flash', [0,1], 2, true);
            flash.play('flash');
            this.physics.enable(attack4, Phaser.Physics.ARCADE);
            attack4.scale.x = 1/2;
            attack4.scale.y = 1/2;
        }
        this.game.time.events.add(Phaser.Timer.SECOND * 25, addAttack5, this);
        function addAttack5(){
            attack5 = this.add.sprite(300, 300,'attack');
            var flash = attack5.animations.add('flash', [0,1], 2, true);
            flash.play('flash');
            this.physics.enable(attack5, Phaser.Physics.ARCADE);
            attack5.scale.x = 1/2;
            attack5.scale.y = 1/2;
        }
        this.game.time.events.add(Phaser.Timer.SECOND * 30, addAttack6, this);
        function addAttack6(){
            attack6 = this.add.sprite(300, 300,'attack');
            var flash = attack6.animations.add('flash', [0,1], 2, true);
            flash.play('flash');
            this.physics.enable(attack6, Phaser.Physics.ARCADE);
            attack6.scale.x = 1/2;
            attack6.scale.y = 1/2;
        }
        this.game.time.events.add(Phaser.Timer.SECOND * 35, addAttack7, this);
        function addAttack7(){
            attack7 = this.add.sprite(300, 300,'attack');
            var flash = attack7.animations.add('flash', [0,1], 2, true);
            flash.play('flash');
            this.physics.enable(attack7, Phaser.Physics.ARCADE);
            attack7.scale.x = 1/2;
            attack7.scale.y = 1/2;
        }
        this.game.time.events.add(Phaser.Timer.SECOND * 40, addAttack8, this);
        function addAttack8(){
            attack8 = this.add.sprite(300, 300,'attack');
            var flash = attack8.animations.add('flash', [0,1], 2, true);
            flash.play('flash');
            this.physics.enable(attack8, Phaser.Physics.ARCADE);
            attack8.scale.x = 1/2;
            attack8.scale.y = 1/2;
        }
        this.game.time.events.add(Phaser.Timer.SECOND * 45, addAttack9, this);
        function addAttack9(){
            attack9 = this.add.sprite(300, 300,'attack');
            var flash = attack9.animations.add('flash', [0,1], 2, true);
            flash.play('flash');
            this.physics.enable(attack9, Phaser.Physics.ARCADE);
            attack9.scale.x = 1/2;
            attack9.scale.y = 1/2;
        }
        this.game.time.events.add(Phaser.Timer.SECOND * 50, addAttack10, this);
        function addAttack10(){
            attack10 = this.add.sprite(300, 300,'attack');
            var flash = attack10.animations.add('flash', [0,1], 2, true);
            flash.play('flash');
            this.physics.enable(attack10, Phaser.Physics.ARCADE);
            attack10.scale.x = 1/2;
            attack10.scale.y = 1/2;
        }
        this.game.time.events.add(Phaser.Timer.SECOND * 55, addAttack11, this);
        function addAttack11(){
            attack11 = this.add.sprite(300, 300,'attack');
            var flash = attack11.animations.add('flash', [0,1], 2, true);
            flash.play('flash');
            this.physics.enable(attack11, Phaser.Physics.ARCADE);
            attack11.scale.x = 1/2;
            attack11.scale.y = 1/2;
        }
        this.game.time.events.add(Phaser.Timer.SECOND * 60, addAttack12, this);
        function addAttack12(){
            attack12 = this.add.sprite(300, 300,'attack');
            var flash = attack12.animations.add('flash', [0,1], 2, true);
            flash.play('flash');
            this.physics.enable(attack12, Phaser.Physics.ARCADE);
            attack12.scale.x = 1/2;
            attack12.scale.y = 1/2;
        }
        this.game.time.events.add(Phaser.Timer.SECOND * 65, addAttack13, this);
        function addAttack13(){
            attack13 = this.add.sprite(300, 300,'attack');
            var flash = attack13.animations.add('flash', [0,1], 2, true);
            flash.play('flash');
            this.physics.enable(attack13, Phaser.Physics.ARCADE);
            attack13.scale.x = 1/2;
            attack13.scale.y = 1/2;
        }

        boss = this.add.sprite(400, 300,'tDevito');
        boss.scale.x = 4;
        boss.scale.y = 4;
        lazer = this.game.make.group();
        for (var i = 0; i < 10; i++)
        {
            var s = lazer.create(this.game.rnd.integerInRange(456, 300), this.game.rnd.integerInRange(25, 345), 'tDevito');

            this.game.physics.enable(s, Phaser.Physics.ARCADE);
            s.body.velocity.x = this.game.rnd.integerInRange(-300, 234);
            s.body.velocity.y = this.game.rnd.integerInRange(-123, 345);
        }
        lazer.setAll('body.collideWorldBounds', true);
        lazer.setAll('body.bounce.x', 1);
        lazer.setAll('body.bounce.y', 1);
        lazer.setAll('body.minBounceVelocity', 0);

        var walk = boss.animations.add('walk', [0,1], 30, true);
        walk.play('walk');
        this.physics.enable(sprite , Phaser.Physics.ARCADE);
        this.physics.enable(boss , Phaser.Physics.ARCADE);
        this.physics.enable(attack, Phaser.Physics.ARCADE);


        cursors = this.input.keyboard.createCursorKeys();



        this.music = this.game.add.audio('tdBattle');
        this.music.volume = 1;
        this.music.loop = true;
        this.music.play();



    },

    update: function () {
        this.physics.arcade.collide(sprite, attack, this.collisionHandler2, null, this);

        sprite.body.velocity.x = 0;
        sprite.body.velocity.y = 0;
        this.physics.arcade.collide(sprite, lazer, this.collisionHandler, null, this);
        this.physics.arcade.collide(sprite, attack2, this.collisionHandler3, null, this);
        this.physics.arcade.collide(sprite, attack3, this.collisionHandler4, null, this);
        this.physics.arcade.collide(sprite, attack4, this.collisionHandler5, null, this);
        this.physics.arcade.collide(sprite, attack5, this.collisionHandler6, null, this);
        this.physics.arcade.collide(sprite, attack6, this.collisionHandler7, null, this);
        this.physics.arcade.collide(sprite, attack7, this.collisionHandler8, null, this);
        this.physics.arcade.collide(sprite, attack8, this.collisionHandler9, null, this);
        this.physics.arcade.collide(sprite, attack9, this.collisionHandler10, null, this);
        this.physics.arcade.collide(sprite, attack10, this.collisionHandler11, null, this);
        this.physics.arcade.collide(sprite, attack11, this.collisionHandler12, null, this);
        this.physics.arcade.collide(sprite, attack12, this.collisionHandler13, null, this);
        this.physics.arcade.collide(sprite, attack13, this.collisionHandler14, null, this);

        if (cursors.up.isDown) {
            sprite.body.velocity.y = -200;

        }
        else {
            sprite.body.acceleration.set(0);
        }

        if (cursors.left.isDown) {

            sprite.body.velocity.x = -200;


        }
        else if (cursors.right.isDown) {

            sprite.body.velocity.x = 200;
        }

        else if (cursors.down.isDown)
        {
            sprite.body.velocity.y = 200;

        }
        boss.rotation += 0.05;

    },
    collisionHandler: function  (obj1, obj2 ) {
        this.game.state.start("Intro8y");
    },
   collisionHandler2: function  (obj1, obj2 ) {
       var diminish = health.animations.add('diminish', [0,1], 5, true);
       diminish.play('diminish');
       var damage = boss.animations.add('damage', [0,1,2,3], 30, true);
       damage.play('damage');
       this.game.time.events.add(Phaser.Timer.SECOND * 4, endAnimation, this);
       function endAnimation(){
           boss.animations.stop(null, true);
           var walk = boss.animations.add('walk', [0,1], 30, true);
           walk.play('walk');
       }
   },
    collisionHandler3: function  (obj1, obj2 ) {
        var diminish = health.animations.add('diminish', [1,2], 5, true);
        diminish.play('diminish');
        attack2.body.velocity.x = 200;
        var damage = boss.animations.add('damage', [0,1,2,3], 30, true);
        damage.play('damage');
        this.game.time.events.add(Phaser.Timer.SECOND * 4, endAnimation, this);
        function endAnimation() {
            boss.animations.stop(null, true);
            var walk = boss.animations.add('walk', [0,1], 30, true);
            walk.play('walk');
        }
    },
    collisionHandler4: function  (obj1, obj2 ) {
        var diminish = health.animations.add('diminish', [2,3], 5, true);
        diminish.play('diminish');
        attack3.body.velocity.x = 200;
        var damage = boss.animations.add('damage', [0,1,2,3], 30, true);
        damage.play('damage');
        this.game.time.events.add(Phaser.Timer.SECOND * 4, endAnimation, this);
        function endAnimation() {
            boss.animations.stop(null, true);
            var walk = boss.animations.add('walk', [0,1], 30, true);
            walk.play('walk');
        }
    },
    collisionHandler5: function  (obj1, obj2 ) {
        var diminish = health.animations.add('diminish', [3,4], 5, true);
        diminish.play('diminish');
        attack4.body.velocity.x = 200;
        var damage = boss.animations.add('damage', [0,1,2,3], 30, true);
        damage.play('damage');
        this.game.time.events.add(Phaser.Timer.SECOND * 4, endAnimation, this);
        function endAnimation() {
            boss.animations.stop(null, true);
            var walk = boss.animations.add('walk', [0,1], 30, true);
            walk.play('walk');
        }
    },
    collisionHandler6: function  (obj1, obj2 ) {
        var diminish = health.animations.add('diminish', [4,5], 5, true);
        diminish.play('diminish');
        attack5.body.velocity.x = 200;
        var damage = boss.animations.add('damage', [0,1,2,3], 30, true);
        damage.play('damage');
        this.game.time.events.add(Phaser.Timer.SECOND * 4, endAnimation, this);
        function endAnimation() {
            boss.animations.stop(null, true);
            var walk = boss.animations.add('walk', [0,1], 30, true);
            walk.play('walk');
        }
    },
    collisionHandler7: function  (obj1, obj2 ) {
        var diminish = health.animations.add('diminish', [5,6], 5, true);
        diminish.play('diminish');
        attack6.body.velocity.x = 200;
        var damage = boss.animations.add('damage', [0,1,2,3], 30, true);
        damage.play('damage');
        this.game.time.events.add(Phaser.Timer.SECOND * 4, endAnimation, this);
        function endAnimation() {
            boss.animations.stop(null, true);
            var walk = boss.animations.add('walk', [0,1], 30, true);
            walk.play('walk');
        }
    },
    collisionHandler8: function  (obj1, obj2 ) {
        var diminish = health.animations.add('diminish', [6,7], 5, true);
        diminish.play('diminish');
        attack7.body.velocity.x = 200;
        var damage = boss.animations.add('damage', [0,1,2,3], 30, true);
        damage.play('damage');
        this.game.time.events.add(Phaser.Timer.SECOND * 4, endAnimation, this);
        function endAnimation() {
            boss.animations.stop(null, true);
            var walk = boss.animations.add('walk', [0,1], 30, true);
            walk.play('walk');
        }
    },
    collisionHandler9: function  (obj1, obj2 ) {
        var diminish = health.animations.add('diminish', [7,8], 5, true);
        diminish.play('diminish');
        attack8.body.velocity.x = 200;
        var damage = boss.animations.add('damage', [0,1,2,3], 30, true);
        damage.play('damage');
        this.game.time.events.add(Phaser.Timer.SECOND * 4, endAnimation, this);
        function endAnimation() {
            boss.animations.stop(null, true);
            var walk = boss.animations.add('walk', [0,1], 30, true);
            walk.play('walk');
        }
    },
    collisionHandler10: function  (obj1, obj2 ) {
        var diminish = health.animations.add('diminish', [8,9], 5, true);
        diminish.play('diminish');
        attack9.body.velocity.x = 200;
        var damage = boss.animations.add('damage', [0,1,2,3], 30, true);
        damage.play('damage');
        this.game.time.events.add(Phaser.Timer.SECOND * 4, endAnimation, this);
        function endAnimation() {
            boss.animations.stop(null, true);
            var walk = boss.animations.add('walk', [0,1], 30, true);
            walk.play('walk');
        }
    },
    collisionHandler11: function  (obj1, obj2 ) {
        var diminish = health.animations.add('diminish', [9,10], 5, true);
        diminish.play('diminish');
        attack10.body.velocity.x = 200;
        var damage = boss.animations.add('damage', [0,1,2,3], 30, true);
        damage.play('damage');
        this.game.time.events.add(Phaser.Timer.SECOND * 4, endAnimation, this);
        function endAnimation() {
            boss.animations.stop(null, true);
            var walk = boss.animations.add('walk', [0,1], 30, true);
            walk.play('walk');
        }
    },
    collisionHandler12: function  (obj1, obj2 ) {
        var diminish = health.animations.add('diminish', [10,11], 5, true);
        diminish.play('diminish');
        attack11.body.velocity.x = 200;
        var damage = boss.animations.add('damage', [0,1,2,3], 30, true);
        damage.play('damage');
        this.game.time.events.add(Phaser.Timer.SECOND * 4, endAnimation, this);
        function endAnimation() {
            boss.animations.stop(null, true);
            var walk = boss.animations.add('walk', [0,1], 30, true);
            walk.play('walk');
        }
    },
    collisionHandler13: function  (obj1, obj2 ) {
        var diminish = health.animations.add('diminish', [11,12], 5, true);
        diminish.play('diminish');
        attack12.body.velocity.x = 200;
        var damage = boss.animations.add('damage', [0,1,2,3], 30, true);
        damage.play('damage');
        this.game.time.events.add(Phaser.Timer.SECOND * 4, endAnimation, this);
        function endAnimation() {
            boss.animations.stop(null, true);
            var walk = boss.animations.add('walk', [0,1], 30, true);
            walk.play('walk');
        }
    },
    collisionHandler14: function  (obj1, obj2 ) {
        this.game.state.start("Win");
    },
    shutdown: function () {
        this.music.volume = 1;
        this.music.stop();
    }


};