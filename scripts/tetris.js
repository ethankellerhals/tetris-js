import { initBoard, updateBoard } from './board.js';
import { initInput } from './input.js';
import { updateScore } from './score.js';
import { renderGame } from './render.js';
import { TETRIMINOS } from './tetriminos.js';

document.addEventListener('DOMContentLoaded', () => {
	initBoard();
	initInput();
	game();
});

let lastTime = 0;
let fallSpeed = 500;
function game(currentTime) {

	const deltaTime = currentTime - lastTime;
	if (deltaTime > fallSpeed) {
		updateBoard(); 
		renderGame();
		updateScore();
		lastTime = currentTime;
	}

	

	requestAnimationFrame(game);
}