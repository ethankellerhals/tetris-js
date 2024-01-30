import { moveTetriminoLeft, moveTetriminoRight, moveTetriminoDown, rotateTetrimino } from './board.js';

export function initInput() {
	document.addEventListener('keydown', handleKeyPress);
}

function handleKeyPress(event) {
	switch(event.key) {
		case 'ArrowLeft':
			moveTetriminoLeft();
			break;
		case 'ArrowRight':
			moveTetriminoRight();
			break;
		case 'ArrowDown':
			moveTetriminoDown();
			break;
		case 'ArrowUp':
			rotateTetrimino();
			break;
	}
}