import { TETRIMINOS } from "./tetriminos.js";
const ROWS = 20;
const COLS = 10;
const EMPTY = 'black';

export let board = Array.from({ length: ROWS}, () => Array(COLS).fill(EMPTY));
export let currentTetrimino;
export let currentTetriminoPosition = { row: 0, col: 0 };
let fallingSpeed = 1;

export function initBoard() {
	currentTetrimino = getRandomTetrimino();
}

export function updateBoard() {
	
	currentTetriminoPosition.row += fallingSpeed;

	// collision detection here
}

export function moveTetriminoLeft() {
	if (currentTetriminoPosition.col > 0) {
		currentTetriminoPosition.col -= 1;
	} 
}

export function moveTetriminoRight() {
	if ((currentTetriminoPosition.col + 1) < COLS) {
		currentTetriminoPosition.col += 1;
	}
}

export function moveTetriminoDown() {
	if (currentTetriminoPosition.row < ROWS) {
		currentTetriminoPosition.row += 1;
	}
}

export function rotateTetriminoClockwise() {
	// update the current tet matrix to its rotated state
	//     I: [1],[1],[1],[1]

	const nextRotation = (currentTetrimino.indexOf(currentTetriminoPosition) + 1) % currentTetrimino.length;
	const rotatedTetrimino = currentTetrimino[nextRotation];

	currentTetrimino = rotatedTetrimino;


}

// export function rotateTetriminoCounterClockwise() {

// }

function getRandomTetrimino() {
	const tetriminoKeys = Object.keys(TETRIMINOS);
	const randomIndex = Math.floor(Math.random() * tetriminoKeys.length);
	
	return TETRIMINOS[tetriminoKeys[randomIndex]];
}