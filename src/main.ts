import {Game} from './game/game';

window.addEventListener('DOMContentLoaded', () => {
    let game = new Game('game');
    game.createScene();
    game.doRender();
});
