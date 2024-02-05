import { initBoard, updateBoard } from './board.js';
import { initInput } from './input.js';
import { renderGame } from './render.js';
import { TETRIMINOS } from './tetriminos.js';

document.addEventListener('DOMContentLoaded', () => {
	initBoard();
	initInput();
	game(0);
});

let previousTime = 0;
let accumulatedTime = 0;
let frameRate = 1;
let frameTime = 1000 / frameRate;
let t = 0;

function game(currentTime) {

	const deltaTime = currentTime - previousTime;
	previousTime = currentTime;
	accumulatedTime += deltaTime;
	frameTime = 1000 / frameRate;
	while (accumulatedTime >= frameTime) {
		updateBoard();
		accumulatedTime -= frameTime;
		previousTime = currentTime;
		
	}
	t += 1;

	if (t % 6000 == 0) {
		if (frameRate < 5) {
			frameRate++;
		} else {
			frameRate += 5;
		}	
	}
	renderGame();
	requestAnimationFrame(game);
}

function gameOver() {
	const gameOver = document.getElementById('game-over-canvas');
	const ctx = gameOver.getContext('2d');
	ctx.fillStyle = 'red';
	ctx.fillRect(0, 0, gameOver.width, gameOver.height);
	ctx.font = '48px Arial';
	ctx.fillStyle = 'white';
	ctx.textAlign = 'center';
	ctx.fillText('Game Over', gameOver.width / 2, gameOver.height / 2);
}