var Player = require("../../common/keystate/player.js");
var UniversalCollisionHandler = require("../../common/keystate/UniversalCollisionHandler");
var Enemies = require("../../common/keystate/ShooteEnemie");
var MainScore = require("../../common/score/score");


var TestL = function () {
    this.testentity = null;
};
var Enemy;
var Player;
var Enemy2;
var Enemys;


module.exports = TestL;

TestL.prototype =
{
player: null,
    enemie: null,
    collide: null,
    score: null,
    create: function()


{

CzechPoints.setLevel(5);
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.player = new Player(this.game);
    this.collide = new UniversalCollisionHandler(this.game);
    this.enemie = new Enemies(this.game);
   console.log(UniversalCollisionHandler);

    this.player.create();
    Enemy= this.game.add.sprite(200, 200, 'ZAMBIE');
    Enemy2 = this.game.add.sprite(222, 200, 'ZAMBIE');
    this.game.physics.arcade.enable(Player);
    this.game.physics.arcade.enable(Enemy);
    this.enemie.create();

    Enemy.body.collideWorldBounds=true;



},

    update: function()
    {
        MainScore.render(this.game);
this.enemie.update(this.player.getSprite());
        this.collide.update(() => {
            this.physics.arcade.collide(this.player.getSprite(), Enemy, this.a, null, this);
            this.physics.arcade.collide(this.player.getSprite(), Enemy2, this.a, null, this);
            this.physics.arcade.collide(this.enemie.getEnemie(), this.player.getSprite() , this.a, null,this);
    });
        this.player.update(() => {
            this.physics.arcade.collide(this.player, Enemys, this.a, null, this);

        });


        Enemy.body.velocity.x = 100;
        Enemy.body.velocity.x = -100;
    },

a: function()
{

    MainScore.addToScore(1);


},

    render: function()
    {

        this.game.debug.bodyInfo(this.player, 32, 32);
        this.game.debug.body(this.player);

    }


};