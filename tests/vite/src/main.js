import { Game as MainGame } from './scenes/Game';
import { AUTO, Scale,Game } from 'phaser';
import { Game2 } from './scenes/Game2';

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config = {
    type: AUTO,
    width: 1024,
    height: 768,
    parent: 'game-container',
    backgroundColor: '#028af8',
    scale: {
        mode: Scale.FIT,
        autoCenter: Scale.CENTER_BOTH
    },
    scene: [
        MainGame, Game2
    ]
};

export default new Game(config);
