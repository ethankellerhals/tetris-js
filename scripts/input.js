import { moveTetriminoLeft, moveTetriminoRight, moveTetriminoDown, rotateTetriminoClockwise } from './board.js';

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
			rotateTetriminoClockwise();
			break;
		// case 'SpaceBar':
		// 	rotateTetriminoCounterClockwise();
		// 	break;
	}
}