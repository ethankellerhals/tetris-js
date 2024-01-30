import { TETRIMINOS } from "./tetriminos.js";

const ROWS = 20;
const COLS = 10;
const EMPTY = 'black';

let board = Array.from({ length: ROWS}, () => Array(COLS).fill(EMPTY));
let currentTetrimino;
let currentTetriminoPosition = { row: 0, col: 0 };
let fallingSpeed = 1;

export function initBoard() {
	currentTetrimino = getRandomTetrimino();
}

export function updateBoard() {

	moveTetriminoDown();

	// collision detection here
}

function moveTetriminoDown() {
	currentTetriminoPosition.row += fallingSpeed;
}

function moveTetriminoLeft() {
	currentTetriminoPosition.row -= 1
}
function moveTetriminoRight() { 
	currentTetriminoPosition.row += 1
}

function rotateTetrimino() {
	// update the current tet matrix to its rotated state
}

function getRandomTetrimino() {
	const tetriminoKeys = Object.keys(TETRIMINOS);
	const randomIndex = Math.floor(Math.random() * tetriminoKeys.length);
	return TETRIMINOS[tetriminoKeys[randomIndex]];
}