import { drawNextTetrimino } from "./render.js";
import { TETRIMINOS } from "./tetriminos.js";
import { updateScore } from './score.js';
import { isArrowDownPressed } from "./input.js";
const ROWS = 20;
const COLS = 10;
const EMPTY = 'black';

export let board = Array.from({ length: ROWS}, () => Array(COLS).fill(EMPTY));
export let currentTetrimino, nextTetrimino, nextnextTetrimino;
export let currentTetriminoPosition = { row: 0, col: 0 };
let fallingSpeed = 1;



export function initBoard() {
	currentTetrimino = getRandomTetrimino();
	nextTetrimino = getRandomTetrimino();
	nextnextTetrimino = getRandomTetrimino();

}


export function updateBoard() {
	if (inBounds(currentTetrimino, currentTetriminoPosition.row+1, currentTetriminoPosition.col)) {
		// not sure how to fix this 
		if (isArrowDownPressed === false) {
			currentTetriminoPosition.row += fallingSpeed;
		}
		// currentTetriminoPosition.row += fallingSpeed;
		// moveTetriminoDown();
	} else { 
		const currentVariation = currentTetrimino.currentVariationIndex

		if (currentTetriminoPosition.row <= 0) {
			
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
				updateScore();
			}
		}

		currentTetrimino = nextTetrimino;
		nextTetrimino = getRandomTetrimino();
		currentTetriminoPosition = { row: 0, col: Math.floor(Math.random() * (COLS - currentTetrimino.variations[0][0].length + 1))};


	}
	
}

export function moveTetriminoLeft() {
	if (currentTetriminoPosition.col > 0) {
		if (inBounds(currentTetrimino, currentTetriminoPosition.row, currentTetriminoPosition.col-1)) {
			currentTetriminoPosition.col--;
		}
		
	} 
}

export function moveTetriminoRight() {
	
	if (currentTetriminoPosition.col < COLS) {
		if (inBounds(currentTetrimino, currentTetriminoPosition.row, currentTetriminoPosition.col+1)) {
			currentTetriminoPosition.col++;
		}
		
	}
}

export function moveTetriminoDown() {
	if (currentTetriminoPosition.row < ROWS) {
		if (inBounds(currentTetrimino, currentTetriminoPosition.row, currentTetriminoPosition.col)) {
			currentTetriminoPosition.row++;
		}
	}
}

export function rotateTetriminoClockwise() {
	let currentVariation = currentTetrimino.currentVariationIndex;
	const maxi = currentTetrimino.variations.length - 1;

	if (currentVariation < maxi) {
		currentVariation++;
	} else {
		currentVariation = 0;
	}
	const newVariation = currentTetrimino.variations[currentVariation];
	if (inBounds(newVariation, currentTetriminoPosition.row, currentTetriminoPosition.col)) {

		currentTetrimino.currentVariationIndex = currentVariation;
		currentTetrimino.variations[currentVariation];
	}
}

export function rotateTetriminoCounterClockwise() {
	let currentVariation = currentTetrimino.currentVariationIndex;
	const maxi = currentTetrimino.variations.length - 1;
	if (currentVariation > 0) {
		currentVariation--;
	} else {
		currentVariation = maxi;
	}
	const newVariation = currentTetrimino.variations[currentVariation];
	currentTetrimino = currentTetrimino.variations[currentVariation];
	console.log("new", currentTetrimino.variations[currentTetrimino.currentVariationIndex]);
	if (inBounds(newVariation, currentTetriminoPosition.row, currentTetriminoPosition.col)) {
		currentTetrimino.currentVariationIndex = currentVariation;
		//currentTetrimino.variations[currentVariation];
	}
}

export function getRandomTetrimino() {
	const tetriminoKeys = Object.keys(TETRIMINOS);
	const randomIndex = Math.floor(Math.random() * tetriminoKeys.length);
	return TETRIMINOS[tetriminoKeys[randomIndex]];
}


function inBounds(tetrimino, row, col) {
	
    for (let rowIndex = 0; rowIndex < tetrimino.variations[tetrimino.currentVariationIndex].length; rowIndex++) {
        for (let colIndex = 0; colIndex < tetrimino.variations[tetrimino.currentVariationIndex][rowIndex].length; colIndex++) {
            if (
                tetrimino.variations[tetrimino.currentVariationIndex][rowIndex][colIndex] === 1 &&
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
