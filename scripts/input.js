import { move, rotate } from './board.js';
import { updateScore } from './score.js';
let keyState = {};

export let isArrowDownPressed = false;

export function initInput() {
	document.addEventListener('keydown', handleKeyDown);
	document.addEventListener('keyup', handleKeyUp);
}

function handleKeyDown(event) {
	keyState[event.key] = true;
	if (event.key === 'ArrowDown') {
		isArrowDownPressed = true;
		
	}
	handleKeyPress();
}

function handleKeyUp(event) {
	keyState[event.key] = false;

	if (event.key === 'ArrowDown') {
		isArrowDownPressed = false;
		updateScore(1);
	}
}

function handleKeyPress() {
	if (keyState['ArrowLeft']) {
		move('left');
	}

	if (keyState['ArrowRight']) {
		move('right');
	}

	if (keyState['ArrowDown']) {
		move('down');
		// isArrowDownPressed = true;
	}

	if (keyState['ArrowUp']) {
		rotate('clockwise');
	}

	if (keyState[' ']) {
		rotate('counterClockwise');
	}
}

