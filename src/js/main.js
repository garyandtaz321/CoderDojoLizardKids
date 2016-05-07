'use strict';

var game = new Phaser.Game(800, 600, Phaser.AUTO, 'my-game-game');

window.Utils = require('./utils');

window.playerState = {
    currentLevel: 'Game'
};

game.state.add('Boot', require('./states/boot'));
game.state.add('Splash', require('./states/splash'));
game.state.add('Preloader', require('./states/preloader'));
game.state.add('Menu', require('./states/menu'));
game.state.add('Game', require('./states/game'));
game.state.add('instruction', require('./states/instruct'));
game.state.add('Intro8y', require('./states/Intro8y'));
game.state.add('Win', require('./states/Win'));
game.state.add('Boss', require('./states/Levels/Boss'));
game.state.add('Level2', require('./states/Levels/Level2'));
game.state.add('Level3', require('./states/Levels/Level3'));
game.state.add('Level4', require('./states/Levels/Level4'));
game.state.add('Level5', require('./states/Levels/Level5'));



game.state.start('Boot');
