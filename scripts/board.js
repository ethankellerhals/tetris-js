import { TETRIMINOS } from "./tetriminos.js";
import { updateScore } from './score.js';

const ROWS = 20;
const COLS = 10;

const EMPTY = 'black';
const FALL = 1;

export let board = Array.from({ length: ROWS}, () => Array(COLS).fill(EMPTY));
export let currentTetrimino, nextTetrimino, nextnextTetrimino;
export let currentTetriminoPosition = { row: 0, col: 0 };

export function initBoard() {
	currentTetrimino = getRandomTetrimino();
	nextTetrimino = getRandomTetrimino();
}

export function updateBoard() {

	if (inBounds(currentTetrimino.variations[currentTetrimino.currentVariationIndex], currentTetriminoPosition.row + 1, currentTetriminoPosition.col)) {

		currentTetriminoPosition.row += FALL;

	} else { 

		const currentVariation = currentTetrimino.currentVariationIndex

		if (currentTetriminoPosition.row <= 0) {
			// game over
			return false;
		}

		for (let row = 0; row < currentTetrimino.variations[currentVariation].length; row++) {
			for (let col = 0; col < currentTetrimino.variations[currentVariation][row].length; col++) {
				if (currentTetrimino.variations[currentVariation][row][col] === 1) {
					board[row + currentTetriminoPosition.row][col + currentTetriminoPosition.col] = currentTetrimino.color;
				}
			}
		}

		for (let row = ROWS - 1; row >= 0; row--) {
			if (board[row].every(cell => cell !== EMPTY)) {
				board.splice(row, 1);
				board.unshift(Array(COLS).fill(EMPTY));
				// need amount of rows
				updateScore(100);
			}
		}

		currentTetrimino = nextTetrimino;
		nextTetrimino = getRandomTetrimino();
		// don't know for sure if it places it in a completely random column
		// especially when the board is a little full near the top
		currentTetriminoPosition = { row: 0, col: Math.floor(Math.random() * (COLS - currentTetrimino.variations[0][0].length + 1))};

	}
	
}

export function move(m) {
	if (m == 'left') {
		if (currentTetriminoPosition.col > 0) {
			if (inBounds(currentTetrimino.variations[currentTetrimino.currentVariationIndex], currentTetriminoPosition.row, currentTetriminoPosition.col-1)) {
				currentTetriminoPosition.col--;
			}
		} 
	}

	if (m == 'right') {
		if (currentTetriminoPosition.col < COLS) {
			if (inBounds(currentTetrimino.variations[currentTetrimino.currentVariationIndex], currentTetriminoPosition.row, currentTetriminoPosition.col+1)) {
				currentTetriminoPosition.col++;
			}
		}
	}

	if (m == 'down') {
		if (currentTetriminoPosition.row < ROWS) {
			if (inBounds(currentTetrimino.variations[currentTetrimino.currentVariationIndex], currentTetriminoPosition.row + 1, currentTetriminoPosition.col)) {
				currentTetriminoPosition.row++;
				updateScore(1);
			}
		}
	}
}

export function rotate(r) {
	const maxi = currentTetrimino.variations.length - 1;
	let nextVariation = currentTetrimino.currentVariationIndex;

	if (r == 'clockwise') {
		if (nextVariation < maxi) {
			nextVariation++;
		} else {
			nextVariation = 0;
		}
	}

	if (r == 'counterClockwise') {
		if (nextVariation > 0) {
			nextVariation--;
		} else {
			nextVariation = maxi;
		}
	}

	if (inBounds(currentTetrimino.variations[nextVariation], currentTetriminoPosition.row, currentTetriminoPosition.col)) {
		currentTetrimino.currentVariationIndex = nextVariation;
	}
}

export function getRandomTetrimino() {
	const tetriminoKeys = Object.keys(TETRIMINOS);
	const randomIndex = Math.floor(Math.random() * tetriminoKeys.length);
	return TETRIMINOS[tetriminoKeys[randomIndex]];
}

function inBounds(tetriminoVariation, row, col) {
	for (let rowIndex = 0; rowIndex < tetriminoVariation.length; rowIndex++) {
		for (let colIndex = 0; colIndex < tetriminoVariation[rowIndex].length; colIndex++) {
			if (
				tetriminoVariation[rowIndex][colIndex] === 1 &&
				(
					col + colIndex < 0 ||
					col + colIndex >= COLS ||
					row + rowIndex >= ROWS ||
					row + rowIndex < 0 ||
					board[row + rowIndex][col + colIndex] !== EMPTY
				)
			) {
				return false;
			}
		}
	}
	return true;
}