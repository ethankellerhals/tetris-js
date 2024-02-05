import { TETRIMINOS } from "./tetriminos.js";
import { currentTetrimino, currentTetriminoPosition, board, nextTetrimino, nextnextTetrimino } from './board.js';

const gameCanvas = document.getElementById('game-canvas');
const ctx = gameCanvas.getContext('2d');
const cellSize = 30;
export function renderGame() {
	drawBoard();
	drawTetrimino(currentTetrimino, currentTetriminoPosition, cellSize);
	drawNextTetrimino(nextTetrimino);
	// drawNextNextTetrimino(nextnextTetrimino);
}

function drawBoard() {
	for (let row = 0; row < 20; row++) {
		for (let col = 0; col < 10; col++) {
			ctx.fillStyle = board[row][col];
			ctx.fillRect(col * cellSize, row * cellSize, cellSize, cellSize);
			ctx.strokeStyle = 'grey';
			ctx.strokeRect(col * cellSize, row * cellSize, cellSize, cellSize);
		}
	}
}

function drawTetrimino(tetrimino, position, cellSize) {
	let currentVariation = tetrimino.currentVariationIndex;
    tetrimino.variations[currentVariation].forEach((row, rowIndex) => {
        row.forEach((cell, colIndex) => {
            if (cell === 1) {
                ctx.fillStyle = tetrimino.color;
                ctx.fillRect(position.col * cellSize + colIndex * cellSize, position.row * cellSize + rowIndex * cellSize, cellSize, cellSize);
                ctx.strokeRect(position.col * cellSize + colIndex * cellSize, position.row * cellSize + rowIndex * cellSize, cellSize, cellSize);
            }
        });
    });
}

export function drawNextTetrimino(nextTetrimino) {
	
	const nextTetriminoCanvas = document.getElementById('next-tetrimino-canvas');
	const nextTetriminoCtx = nextTetriminoCanvas.getContext('2d');
	nextTetriminoCtx.clearRect(0, 0, nextTetriminoCanvas.width, nextTetriminoCanvas.height);

	nextTetrimino.variations[0].forEach((row, rowIndex) => {
		row.forEach((cell, colIndex) => {
			if (cell == 1) {
				nextTetriminoCtx.fillStyle = nextTetrimino.color;
				nextTetriminoCtx.fillRect(colIndex * cellSize, rowIndex * cellSize, cellSize, cellSize, cellSize);
				nextTetriminoCtx.strokeRect(colIndex * cellSize, rowIndex * cellSize, cellSize, cellSize);
			}
		});
	});
}

// function drawNextNextTetrimino(nextNextTetrimino) {
// 	const nextNextTetriminoCanvas = document.getElementById('next-next-tetrimino-canvas');
// 	const nextNextTetriminoCtx = nextNextTetriminoCanvas.getContext('2d');
// 	const nextNextCellSize = 30;

// 	nextNextTetrimino.variations[0].forEach((row, rowIndex) => {
// 		row.forEach((cell, colIndex) => {
// 			if (cell == 1) {
// 				nextNextTetriminoCtx.fillStyle = nextNextTetrimino.color;
// 				nextNextTetriminoCtx.fillRect(colIndex * nextNextCellSize, rowIndex * nextNextCellSize, nextNextCellSize, nextNextCellSize, nextNextCellSize);
// 				nextNextTetriminoCtx.strokeRect(colIndex * nextNextCellSize, rowIndex * nextNextCellSize, nextNextCellSize, nextNextCellSize);
// 			}
// 		});
// 	});
// }