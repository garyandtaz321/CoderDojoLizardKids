var Level5 = function () {
    this.testentity = null;
};

module.exports = Level5;
var map;
var tileset;
var layer;
var sprite;
var goal;
var goal1;
//Keystate import
var KeyState = require("../../common/keystate/Keystate");
var Health = require("../../common/keystate/Health");
Level5.prototype = {
    keystate: null,
    health: null,
    create: function () {
        this.game.physics.startSystem(Phaser.Physics.P2JS);
        this.game.physics.p2.setImpactEvents(true);

        cursors = this.input.keyboard.createCursorKeys();
        this.keystate = new KeyState(this.game);
        this.health = new Health(this.game);

this.game.world.setBounds(0 ,0 , 3300, 3300);
        map = this.game.add.tilemap('map');
        map.addTilesetImage('DungeonCrawl_ProjectUtumnoTileset');
        layer = map.createLayer('Tile Layer 1');



        sprite = this.add.sprite(1632, 1632, 'walker');
        var pWalk = sprite.animations.add('pWalk', [0,1], 10, true);
        pWalk.play('pWalk');

        this.game.physics.p2.enable(sprite);
        this.game.camera.follow(sprite);
        sprite.body.fixedRotation = true;
        map.setCollision(1194);
        this.game.physics.p2.convertTilemap(map, layer);
        goal = this.game.add.sprite(320, 320, 'goal');
        goal1 = this.game.add.sprite(960, 2400, 'goal');
        this.game.time.events.add(Phaser.Timer.SECOND * 25, this.Death, this);
        this.game.physics.enable(goal, Phaser.Physics.P2JS);
        this.game.physics.enable(goal1, Phaser.Physics.P2JS);
    },

    update: function () {
        goal.body.onBeginContact.add(this.Win , this);
        goal1.body.onBeginContact.add(this.Win, this);
        this.keystate.update();
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
    },
    render: function()
    {

        this.game.debug.text("Time left to Get to end " + this.game.time.events.duration, 32, 32);


    },
    Death: function()
    {
        this.game.state.start("Intro8y");


    },
    Win: function()
    {
        this.game.state.start("Boss");


    },

};