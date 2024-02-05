import { move, rotate } from './board.js';

let keyState = {};

export function initInput() {
	document.addEventListener('keydown', handleKeyDown);
	document.addEventListener('keyup', handleKeyUp);
}

function handleKeyDown(event) {
	keyState[event.key] = true;
	handleKeyPress();
}

function handleKeyUp(event) {
	keyState[event.key] = false;
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
	}

	if (keyState['ArrowUp']) {
		rotate('clockwise');
	}

	if (keyState[' ']) {
		rotate('counterClockwise');
	}
}

