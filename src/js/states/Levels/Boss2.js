var Boss2 = function () {};

module.exports = Boss2;

var background;
var sprite;
var boss;
var bdevito;
var lazer;
var lazeri;
var lazer2;
var lazer2i;
var lazer3;
var lazer3i;
var lazer4;
var lazer4a;
var lazer4b;
var lazer4c;
var lazer4d;
var lazer4e;
var lazer4i;
var lazer4ia;
var lazer4ib;
var lazer4ic;
var lazer4id;
var lazer4ie;
var lazer5;
var lazer5i;
var lazer6;
var lazer6i;
var lazer7;
var lazer7i;
var lazer8;
var lazer8i;
var lazer9;
var lazer9a;
var lazer9b;
var lazer9c;
var lazer9d;
var lazer9e;
var lazer9i;
var lazer9ia;
var lazer9ib;
var lazer9ic;
var lazer9id;
var lazer9ie;
var lazer10;
var lazer10i;
var lazerN;
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
var name;
var Health;
var L = 0;

//Danny import
//var Danny = require("../../common/Danny");
var Attack = require("../../common/attack");
var HealthCollisions = {
    collided: false,
    locked: false
};
Boss2.prototype = {
    //Danny: null,
    Attack: null,
    create: function () {
        this.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.stage.backgroundColor = '#8B0000';
        //back = this.add.sprite(400, 300, 'bb');
        //var spook = back.animations.add('spook', [0,1,2,3,4,5,6,7], 30, true);
        //spook.play('spook');
        //this.Danny = new Danny(this.game);
        //console.log(this.Danny);
        this.Attack = new Attack(this.game);

        background = this.add.sprite(0,0, 'space');
        boss = this.add.sprite(100,0,'Devito');
        var laugh = boss.animations.add('laugh', [2,3], 5, true);
        laugh.play('laugh');
        this.sound.play('Laugh');
        this.game.time.events.add(Phaser.Timer.SECOND * 2, Laugh, this);
        function Laugh(){
            boss.animations.stop(null, true);
            boss.frame=0;
        }
        sprite = this.add.sprite(567, 400, 'walker');
        health = this.add.sprite(0,0, 'hb');
        sweat = this.add.sprite(0,40, 'sweat');
        lazerN = this.add.audio('lazerN');
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
        name = this.add.sprite(200, 250, 'name');
        Health = this.game.add.sprite(0, 582, 'liverroni');
        this.game.time.events.add(Phaser.Timer.SECOND * 4, fadeTitle, this);
        function fadeTitle(){
            this.game.add.tween(name).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
            console.log('faded');
        }
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
        for(var i= 0; i < 500; i=i+27) {
            this.game.time.events.add(Phaser.Timer.SECOND * (1+i), lazerBarrage, this);
            function lazerBarrage() {
                lazer = this.add.sprite(245, 225, 'lazer');
                lazeri = this.add.sprite(380, 215, 'lazer');
                this.physics.enable(lazer, Phaser.Physics.ARCADE);
                this.physics.enable(lazeri, Phaser.Physics.ARCADE);
                lazer.body.velocity.y = 200;
                lazeri.body.velocity.y = 200;
                this.sound.play('lazerN');
                console.log('lazerz')
            }

            this.game.time.events.add(Phaser.Timer.SECOND * (3+i), lazer2Barrage, this);
            function lazer2Barrage() {
                lazer2 = this.add.sprite(275, 240, 'lazer');
                lazer2i = this.add.sprite(385, 205, 'lazer');
                lazer2.angle = 135;
                lazer2i.angle = 45;
                this.physics.enable(lazer2, Phaser.Physics.ARCADE);
                this.physics.enable(lazer2i, Phaser.Physics.ARCADE);
                lazer2.body.velocity.y = 200;
                lazer2.body.velocity.x = 200;
                lazer2i.body.velocity.x = -200;
                lazer2i.body.velocity.y = 200;
                this.sound.play('lazerN');
                console.log('lazer2z')
            }

            this.game.time.events.add(Phaser.Timer.SECOND * (6+i), lazer3Barrage, this);
            function lazer3Barrage() {
                lazer3 = this.add.sprite(243, 220, 'lazer');
                lazer3i = this.add.sprite(410, 230, 'lazer');
                lazer3.angle = 45;
                lazer3i.angle = 135;
                this.physics.enable(lazer3, Phaser.Physics.ARCADE);
                this.physics.enable(lazer3i, Phaser.Physics.ARCADE);
                lazer3.body.velocity.y = 200;
                lazer3.body.velocity.x = -200;
                lazer3i.body.velocity.x = 200;
                lazer3i.body.velocity.y = 200;
                this.sound.play('lazerN');
                console.log('lazer3z')
            }

            this.game.time.events.add(Phaser.Timer.SECOND * (9+i), lazer4Barrage, this);
            function lazer4Barrage() {
                lazer4 = this.add.sprite(243, 220, 'lazer');
                lazer4a = this.add.sprite(243, 220, 'lazer');
                lazer4b = this.add.sprite(243, 220, 'lazer');
                lazer4c = this.add.sprite(243, 220, 'lazer');
                lazer4d = this.add.sprite(243, 220, 'lazer');
                lazer4e = this.add.sprite(243, 220, 'lazer');
                lazer4i = this.add.sprite(410, 230, 'lazer');
                lazer4ia = this.add.sprite(410, 230, 'lazer');
                lazer4ib = this.add.sprite(410, 230, 'lazer');
                lazer4ic = this.add.sprite(410, 230, 'lazer');
                lazer4id = this.add.sprite(410, 230, 'lazer');
                lazer4ie = this.add.sprite(410, 230, 'lazer');
                lazer4.angle = 10;
                lazer4a.angle = 20;
                lazer4b.angle = 30;
                lazer4c.angle = 40;
                lazer4d.angle = 50;
                lazer4e.angle = 60;
                lazer4i.angle = 350;
                lazer4ia.angle = 340;
                lazer4ib.angle = 330;
                lazer4ic.angle = 320;
                lazer4id.angle = 310;
                lazer4ie.angle = 300;
                this.physics.enable(lazer4, Phaser.Physics.ARCADE);
                this.physics.enable(lazer4a, Phaser.Physics.ARCADE);
                this.physics.enable(lazer4b, Phaser.Physics.ARCADE);
                this.physics.enable(lazer4c, Phaser.Physics.ARCADE);
                this.physics.enable(lazer4d, Phaser.Physics.ARCADE);
                this.physics.enable(lazer4e, Phaser.Physics.ARCADE);
                this.physics.enable(lazer4i, Phaser.Physics.ARCADE);
                this.physics.enable(lazer4ia, Phaser.Physics.ARCADE);
                this.physics.enable(lazer4ib, Phaser.Physics.ARCADE);
                this.physics.enable(lazer4ic, Phaser.Physics.ARCADE);
                this.physics.enable(lazer4id, Phaser.Physics.ARCADE);
                this.physics.enable(lazer4ie, Phaser.Physics.ARCADE);
                lazer4.body.velocity.y = 200;
                lazer4.body.velocity.x = -200;
                lazer4a.body.velocity.y = 200;
                lazer4a.body.velocity.x = -300;
                lazer4b.body.velocity.y = 200;
                lazer4b.body.velocity.x = -400;
                lazer4c.body.velocity.y = 200;
                lazer4c.body.velocity.x = -500;
                lazer4d.body.velocity.y = 200;
                lazer4d.body.velocity.x = -600;
                lazer4e.body.velocity.y = 200;
                lazer4e.body.velocity.x = -700;
                lazer4i.body.velocity.x = 200;
                lazer4i.body.velocity.y = 200;
                lazer4ia.body.velocity.x = 300;
                lazer4ia.body.velocity.y = 200;
                lazer4ib.body.velocity.x = 400;
                lazer4ib.body.velocity.y = 200;
                lazer4ic.body.velocity.x = 500;
                lazer4ic.body.velocity.y = 200;
                lazer4id.body.velocity.x = 600;
                lazer4id.body.velocity.y = 200;
                lazer4ie.body.velocity.x = 700;
                lazer4ie.body.velocity.y = 200;
                this.sound.play('lazerN');
                console.log('lazer4z');
            }

            this.game.time.events.add(Phaser.Timer.SECOND * (12+i), lazer5Barrage, this);
            function lazer5Barrage() {
                lazer5 = this.add.sprite(243, 220, 'lazer');
                lazer5i = this.add.sprite(410, 230, 'lazer');
                lazer5.angle = 45;
                lazer5i.angle = 135;
                this.physics.enable(lazer5, Phaser.Physics.ARCADE);
                this.physics.enable(lazer5i, Phaser.Physics.ARCADE);
                lazer5.body.velocity.y = 200;
                lazer5.body.velocity.x = -200;
                lazer5i.body.velocity.x = 200;
                lazer5i.body.velocity.y = 200;
                this.sound.play('lazerN');
                console.log('lazer5z');
            }

            this.game.time.events.add(Phaser.Timer.SECOND * (15+i), lazer6Barrage, this);
            function lazer6Barrage() {
                lazer6 = this.add.sprite(245, 225, 'lazer');
                lazer6i = this.add.sprite(380, 215, 'lazer');
                this.physics.enable(lazer6, Phaser.Physics.ARCADE);
                this.physics.enable(lazer6i, Phaser.Physics.ARCADE);
                lazer6.body.velocity.y = 200;
                lazer6i.body.velocity.y = 200;
                console.log('lazer6z')
                this.sound.play('lazerN');
            }

            this.game.time.events.add(Phaser.Timer.SECOND * (18+i), lazer7Barrage, this);
            function lazer7Barrage() {
                lazer7 = this.add.sprite(275, 240, 'lazer');
                lazer7i = this.add.sprite(385, 205, 'lazer');
                lazer7.angle = 135;
                lazer7i.angle = 45;
                this.physics.enable(lazer7, Phaser.Physics.ARCADE);
                this.physics.enable(lazer7i, Phaser.Physics.ARCADE);
                lazer7.body.velocity.y = 200;
                lazer7.body.velocity.x = 200;
                lazer7i.body.velocity.x = -200;
                lazer7i.body.velocity.y = 200;
                console.log('lazer7z')
                this.sound.play('lazerN');
            }

            this.game.time.events.add(Phaser.Timer.SECOND * (21+i), lazer8Barrage, this);
            function lazer8Barrage() {
                lazer8 = this.add.sprite(243, 220, 'lazer');
                lazer8i = this.add.sprite(410, 230, 'lazer');
                lazer8.angle = 45;
                lazer8i.angle = 135;
                this.physics.enable(lazer8, Phaser.Physics.ARCADE);
                this.physics.enable(lazer8i, Phaser.Physics.ARCADE);
                lazer8.body.velocity.y = 200;
                lazer8.body.velocity.x = -200;
                lazer8i.body.velocity.x = 200;
                lazer8i.body.velocity.y = 200;
                console.log('lazer8z')
                this.sound.play('lazerN');
            }

            this.game.time.events.add(Phaser.Timer.SECOND * (24+i), lazer9Barrage, this);
            function lazer9Barrage() {
                lazer9 = this.add.sprite(243, 220, 'lazer');
                lazer9a = this.add.sprite(243, 220, 'lazer');
                lazer9b = this.add.sprite(243, 220, 'lazer');
                lazer9c = this.add.sprite(243, 220, 'lazer');
                lazer9d = this.add.sprite(243, 220, 'lazer');
                lazer9e = this.add.sprite(243, 220, 'lazer');
                lazer9i = this.add.sprite(410, 230, 'lazer');
                lazer9ia = this.add.sprite(410, 230, 'lazer');
                lazer9ib = this.add.sprite(410, 230, 'lazer');
                lazer9ic = this.add.sprite(410, 230, 'lazer');
                lazer9id = this.add.sprite(410, 230, 'lazer');
                lazer9ie = this.add.sprite(410, 230, 'lazer');
                lazer9.angle = 10;
                lazer9a.angle = 20;
                lazer9b.angle = 30;
                lazer9c.angle = 40;
                lazer9d.angle = 50;
                lazer9e.angle = 60;
                lazer9i.angle = 350;
                lazer9ia.angle = 340;
                lazer9ib.angle = 330;
                lazer9ic.angle = 320;
                lazer9id.angle = 310;
                lazer9ie.angle = 300;
                this.physics.enable(lazer9, Phaser.Physics.ARCADE);
                this.physics.enable(lazer9a, Phaser.Physics.ARCADE);
                this.physics.enable(lazer9b, Phaser.Physics.ARCADE);
                this.physics.enable(lazer9c, Phaser.Physics.ARCADE);
                this.physics.enable(lazer9d, Phaser.Physics.ARCADE);
                this.physics.enable(lazer9e, Phaser.Physics.ARCADE);
                this.physics.enable(lazer9i, Phaser.Physics.ARCADE);
                this.physics.enable(lazer9ia, Phaser.Physics.ARCADE);
                this.physics.enable(lazer9ib, Phaser.Physics.ARCADE);
                this.physics.enable(lazer9ic, Phaser.Physics.ARCADE);
                this.physics.enable(lazer9id, Phaser.Physics.ARCADE);
                this.physics.enable(lazer9ie, Phaser.Physics.ARCADE);
                lazer9.body.velocity.y = 200;
                lazer9.body.velocity.x = -200;
                lazer9a.body.velocity.y = 200;
                lazer9a.body.velocity.x = -300;
                lazer9b.body.velocity.y = 200;
                lazer9b.body.velocity.x = -400;
                lazer9c.body.velocity.y = 200;
                lazer9c.body.velocity.x = -500;
                lazer9d.body.velocity.y = 200;
                lazer9d.body.velocity.x = -600;
                lazer9e.body.velocity.y = 200;
                lazer9e.body.velocity.x = -700;
                lazer9i.body.velocity.x = 200;
                lazer9i.body.velocity.y = 200;
                lazer9ia.body.velocity.x = 300;
                lazer9ia.body.velocity.y = 200;
                lazer9ib.body.velocity.x = 400;
                lazer9ib.body.velocity.y = 200;
                lazer9ic.body.velocity.x = 500;
                lazer9ic.body.velocity.y = 200;
                lazer9id.body.velocity.x = 600;
                lazer9id.body.velocity.y = 200;
                lazer9ie.body.velocity.x = 700;
                lazer9ie.body.velocity.y = 200;
                console.log('lazer9z');
                this.sound.play('lazerN');
            }

            this.game.time.events.add(Phaser.Timer.SECOND * (27+i), lazer10Barrage, this);
            function lazer10Barrage() {
                lazer10 = this.add.sprite(243, 220, 'lazer');
                lazer10i = this.add.sprite(410, 230, 'lazer');
                lazer10.angle = 45;
                lazer10i.angle = 135;
                this.physics.enable(lazer10, Phaser.Physics.ARCADE);
                this.physics.enable(lazer10i, Phaser.Physics.ARCADE);
                lazer10.body.velocity.y = 200;
                lazer10.body.velocity.x = -200;
                lazer10i.body.velocity.x = 200;
                lazer10i.body.velocity.y = 200;
                console.log('lazer10z');
                this.sound.play('lazerN');
            }
        }

        bdevito = this.game.make.group();
        for (var i = 0; i < 5; i++)
        {
            var s = bdevito.create(this.game.rnd.integerInRange(456, 300), this.game.rnd.integerInRange(25, 345), 'tDevito');

            this.game.physics.enable(s, Phaser.Physics.ARCADE);
            s.body.velocity.x = this.game.rnd.integerInRange(-300, 234);
            s.body.velocity.y = this.game.rnd.integerInRange(-123, 345);
        }
        bdevito.setAll('body.collideWorldBounds', true);
        bdevito.setAll('body.bounce.x', 1);
        bdevito.setAll('body.bounce.y', 1);
        bdevito.setAll('body.minBounceVelocity', 0);

        this.physics.enable(sprite , Phaser.Physics.ARCADE);
        this.physics.enable(boss , Phaser.Physics.ARCADE);
        this.physics.enable(attack, Phaser.Physics.ARCADE);
        sprite.body.collideWorldBounds=true;

        cursors = this.input.keyboard.createCursorKeys();



        this.music = this.game.add.audio('DBattle');
        this.music.volume = 1;
        this.music.loop = true;
        this.music.play();



    },

    update: function () {
        this.physics.arcade.collide(sprite, attack, this.collisionHandler2, null, this);
        //this.Danny.update();
        sprite.body.velocity.x = 0;
        sprite.body.velocity.y = 0;
        this.physics.arcade.collide(sprite, bdevito, this.collisionHandler, null, this);
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
        HealthCollisions.collided = this.physics.arcade.collide(sprite, lazer, this.KillHandler, null, this);
        HealthCollisions.collided = this.physics.arcade.collide(sprite, lazeri, this.KillHandler, null, this);
        HealthCollisions.collided = this.physics.arcade.collide(sprite, lazer2, this.KillHandler, null, this);
        HealthCollisions.collided = this.physics.arcade.collide(sprite, lazer2i, this.KillHandler, null, this);
        HealthCollisions.collided = this.physics.arcade.collide(sprite, lazer3, this.KillHandler, null, this);
        HealthCollisions.collided = this.physics.arcade.collide(sprite, lazer3i, this.KillHandler, null, this);
        HealthCollisions.collided = this.physics.arcade.collide(sprite, lazer4, this.KillHandler, null, this);
        HealthCollisions.collided = this.physics.arcade.collide(sprite, lazer4a, this.KillHandler, null, this);
        HealthCollisions.collided = this.physics.arcade.collide(sprite, lazer4b, this.KillHandler, null, this);
        HealthCollisions.collided = this.physics.arcade.collide(sprite, lazer4c, this.KillHandler, null, this);
        HealthCollisions.collided = this.physics.arcade.collide(sprite, lazer4d, this.KillHandler, null, this);
        HealthCollisions.collided = this.physics.arcade.collide(sprite, lazer4e, this.KillHandler, null, this);
        HealthCollisions.collided = this.physics.arcade.collide(sprite, lazer4i, this.KillHandler, null, this);
        HealthCollisions.collided = this.physics.arcade.collide(sprite, lazer4ia, this.KillHandler, null, this);
        HealthCollisions.collided = this.physics.arcade.collide(sprite, lazer4ib, this.KillHandler, null, this);
        HealthCollisions.collided = this.physics.arcade.collide(sprite, lazer4ic, this.KillHandler, null, this);
        HealthCollisions.collided = this.physics.arcade.collide(sprite, lazer4id, this.KillHandler, null, this);
        HealthCollisions.collided = this.physics.arcade.collide(sprite, lazer4ie, this.KillHandler, null, this);
        HealthCollisions.collided = this.physics.arcade.collide(sprite, lazer5, this.KillHandler, null, this);
        HealthCollisions.collided = this.physics.arcade.collide(sprite, lazer5i, this.KillHandler, null, this);
        HealthCollisions.collided = this.physics.arcade.collide(sprite, lazer6, this.KillHandler, null, this);
        HealthCollisions.collided = this.physics.arcade.collide(sprite, lazer6i, this.KillHandler, null, this);
        HealthCollisions.collided = this.physics.arcade.collide(sprite, lazer7, this.KillHandler, null, this);
        HealthCollisions.collided = this.physics.arcade.collide(sprite, lazer7i, this.KillHandler, null, this);
        HealthCollisions.collided = this.physics.arcade.collide(sprite, lazer8, this.KillHandler, null, this);
        HealthCollisions.collided = this.physics.arcade.collide(sprite, lazer8i, this.KillHandler, null, this);
        HealthCollisions.collided = this.physics.arcade.collide(sprite, lazer9, this.KillHandler, null, this);
        HealthCollisions.collided = this.physics.arcade.collide(sprite, lazer9a, this.KillHandler, null, this);
        HealthCollisions.collided = this.physics.arcade.collide(sprite, lazer9b, this.KillHandler, null, this);
        HealthCollisions.collided = this.physics.arcade.collide(sprite, lazer9c, this.KillHandler, null, this);
        HealthCollisions.collided = this.physics.arcade.collide(sprite, lazer9d, this.KillHandler, null, this);
        HealthCollisions.collided = this.physics.arcade.collide(sprite, lazer9e, this.KillHandler, null, this);
        HealthCollisions.collided = this.physics.arcade.collide(sprite, lazer9i, this.KillHandler, null, this);
        HealthCollisions.collided = this.physics.arcade.collide(sprite, lazer9ia, this.KillHandler, null, this);
        HealthCollisions.collided = this.physics.arcade.collide(sprite, lazer9ib, this.KillHandler, null, this);
        HealthCollisions.collided = this.physics.arcade.collide(sprite, lazer9ic, this.KillHandler, null, this);
        HealthCollisions.collided = this.physics.arcade.collide(sprite, lazer9id, this.KillHandler, null, this);
        HealthCollisions.collided = this.physics.arcade.collide(sprite, lazer9ie, this.KillHandler, null, this);
        HealthCollisions.collided = this.physics.arcade.collide(sprite, lazer10, this.KillHandler, null, this);
        HealthCollisions.collided = this.physics.arcade.collide(sprite, lazer10i, this.KillHandler, null, this);
        HealthCollisions.collided = this.physics.arcade.collide(sprite, bdevito, this.KillHandler, null, this);

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

        if (!HealthCollisions.collided) {
            HealthCollisions.locked = false;
            console.log('unlocked')
        }


        if (L == 1){
            Health.frame=1;
        } else if(L == 2){
            Health.frame=2;
        }else if(L == 3){
            Health.frame=3;
            this.game.state.start("Intro8y");
            L=0;

        }

    },
   /* render: function() {
        //this.game.debug.body(bdevito);
        this.game.debug.body(sprite);
        //this.game.debug.body(lazer);

    },*/
    KillHandler: function(obj1, obj2) {
        if (HealthCollisions.locked) {
            return;
        }

        L++;
        console.log(L);
        HealthCollisions.locked = true;
    },
   collisionHandler2: function  (obj1, obj2 ) {
       var diminish = health.animations.add('diminish', [0,1], 5, true);
       diminish.play('diminish');
       var damage = boss.animations.add('damage', [0,1,2,3], 15, true);
       damage.play('damage');
       this.sound.play('hit2');
       this.game.time.events.add(Phaser.Timer.SECOND * 4, endAnimation, this);
       function endAnimation(){
           boss.animations.stop(null, true);
       }
   },
    collisionHandler3: function  (obj1, obj2 ) {
        var diminish = health.animations.add('diminish', [1,2], 5, true);
        diminish.play('diminish');
        attack2.body.velocity.x = 200;
        var damage = boss.animations.add('damage', [0,1,2,3], 15, true);
        damage.play('damage');
        this.sound.play('hit2');
        this.game.time.events.add(Phaser.Timer.SECOND * 4, endAnimation, this);
        function endAnimation() {
            boss.animations.stop(null, true);
        }
    },
    collisionHandler4: function  (obj1, obj2 ) {
        var diminish = health.animations.add('diminish', [2,3], 5, true);
        diminish.play('diminish');
        attack3.body.velocity.x = 200;
        var damage = boss.animations.add('damage', [0,1,2,3], 15, true);
        damage.play('damage');
        this.sound.play('hit2');
        this.game.time.events.add(Phaser.Timer.SECOND * 4, endAnimation, this);
        function endAnimation() {
            boss.animations.stop(null, true);
        }
    },
    collisionHandler5: function  (obj1, obj2 ) {
        var diminish = health.animations.add('diminish', [3,4], 5, true);
        diminish.play('diminish');
        attack4.body.velocity.x = 200;
        var damage = boss.animations.add('damage', [0,1,2,3], 15, true);
        damage.play('damage');
        this.sound.play('hit2');
        this.game.time.events.add(Phaser.Timer.SECOND * 4, endAnimation, this);
        function endAnimation() {
            boss.animations.stop(null, true);
        }
    },
    collisionHandler6: function  (obj1, obj2 ) {
        var diminish = health.animations.add('diminish', [4,5], 5, true);
        diminish.play('diminish');
        attack5.body.velocity.x = 200;
        var damage = boss.animations.add('damage', [0,1,2,3], 15, true);
        damage.play('damage');
        this.sound.play('hit2');
        this.game.time.events.add(Phaser.Timer.SECOND * 4, endAnimation, this);
        function endAnimation() {
            boss.animations.stop(null, true);
        }
    },
    collisionHandler7: function  (obj1, obj2 ) {
        var diminish = health.animations.add('diminish', [5,6], 5, true);
        diminish.play('diminish');
        attack6.body.velocity.x = 200;
        var damage = boss.animations.add('damage', [0,1,2,3], 15, true);
        damage.play('damage');
        this.sound.play('hit2');
        this.game.time.events.add(Phaser.Timer.SECOND * 4, endAnimation, this);
        function endAnimation() {
            boss.animations.stop(null, true);
        }
    },
    collisionHandler8: function  (obj1, obj2 ) {
        var diminish = health.animations.add('diminish', [6,7], 5, true);
        diminish.play('diminish');
        attack7.body.velocity.x = 200;
        var damage = boss.animations.add('damage', [0,1,2,3], 15, true);
        damage.play('damage');
        this.sound.play('hit2');
        this.game.time.events.add(Phaser.Timer.SECOND * 4, endAnimation, this);
        function endAnimation() {
            boss.animations.stop(null, true);
        }
    },
    collisionHandler9: function  (obj1, obj2 ) {
        var diminish = health.animations.add('diminish', [7,8], 5, true);
        diminish.play('diminish');
        attack8.body.velocity.x = 200;
        var damage = boss.animations.add('damage', [0,1,2,3], 15, true);
        damage.play('damage');
        this.sound.play('hit2');
        this.game.time.events.add(Phaser.Timer.SECOND * 4, endAnimation, this);
        function endAnimation() {
            boss.animations.stop(null, true);
        }
    },
    collisionHandler10: function  (obj1, obj2 ) {
        var diminish = health.animations.add('diminish', [8,9], 5, true);
        diminish.play('diminish');
        attack9.body.velocity.x = 200;
        var damage = boss.animations.add('damage', [0,1,2,3], 15, true);
        damage.play('damage');
        this.sound.play('hit2');
        this.game.time.events.add(Phaser.Timer.SECOND * 4, endAnimation, this);
        function endAnimation() {
            boss.animations.stop(null, true);
        }
    },
    collisionHandler11: function  (obj1, obj2 ) {
        var diminish = health.animations.add('diminish', [9,10], 5, true);
        diminish.play('diminish');
        attack10.body.velocity.x = 200;
        var damage = boss.animations.add('damage', [0,1,2,3], 15, true);
        damage.play('damage');
        this.sound.play('hit2');
        this.game.time.events.add(Phaser.Timer.SECOND * 4, endAnimation, this);
        function endAnimation() {
            boss.animations.stop(null, true);
        }
    },
    collisionHandler12: function  (obj1, obj2 ) {
        var diminish = health.animations.add('diminish', [10,11], 5, true);
        diminish.play('diminish');
        attack11.body.velocity.x = 200;
        var damage = boss.animations.add('damage', [0,1,2,3], 15, true);
        damage.play('damage');
        this.sound.play('hit2');
        this.game.time.events.add(Phaser.Timer.SECOND * 4, endAnimation, this);
        function endAnimation() {
            boss.animations.stop(null, true);
        }
    },
    collisionHandler13: function  (obj1, obj2 ) {
        var diminish = health.animations.add('diminish', [11,12], 5, true);
        diminish.play('diminish');
        attack12.body.velocity.x = 200;
        var damage = boss.animations.add('damage', [0,1], 15, true);
        damage.play('damage');
        this.sound.play('hit2');
        this.game.time.events.add(Phaser.Timer.SECOND * 4, endAnimation, this);
        function endAnimation() {
            boss.animations.stop(null, true);
        }
    },
    collisionHandler14: function  (obj1, obj2 ) {
        this.game.state.start("BossDie2");
    },

    shutdown: function () {
        this.music.volume = 1;
        this.music.stop();
    }


};