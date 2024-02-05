import { moveTetriminoLeft, moveTetriminoRight, moveTetriminoDown, rotateTetriminoClockwise, rotateTetriminoCounterClockwise } from './board.js';

let keyState = {};

export let isArrowDownPressed = false;

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
	if (event.key === 'ArrowDown') {
		isArrowDownPressed = false;
	}
}

function handleKeyPress() {
	if (keyState['ArrowLeft']) {
		moveTetriminoLeft();
	}
	if (keyState['ArrowRight']) {
		moveTetriminoRight();
	}
	if (keyState['ArrowDown']) {
		moveTetriminoDown();
		isArrowDownPressed = true;
	}
	if (keyState['ArrowUp']) {
		rotateTetriminoClockwise();
	}
	if (keyState[' ']) {
		rotateTetriminoCounterClockwise();
	}
}
