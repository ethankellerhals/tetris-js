import { initBoard } from './board.js';
import { initInput } from './input.js';
import { updateScore } from './score.js';
import { renderGame } from './render.js';
import { TETRIMINOS } from './tetriminos.js';

document.addEventListener('DOMContentLoaded', () => {
	initBoard();
	initInput();

	game();
});

function game() {

	updateScore();
	renderGame();

	requestAnimationFrame(game);
}