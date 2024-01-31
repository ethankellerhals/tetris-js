import { TETRIMINOS } from "./tetriminos.js";
import { currentTetrimino, currentTetriminoPosition, board } from './board.js';

const gameCanvas = document.getElementById('gameCanvas');
const ctx = gameCanvas.getContext('2d');
const cellSize = 30;
export function renderGame() {
	drawBoard();
	drawTetrimino(currentTetrimino, currentTetriminoPosition);
}
function drawBoard() {
	for (let row = 0; row < 20; row++) {
		for (let col = 0; col < 10; col++) {
			ctx.fillStyle = board[row][col];
			ctx.fillRect(col * cellSize, row * cellSize, cellSize, cellSize);
			ctx.strokeRect(col * cellSize, row * cellSize, cellSize, cellSize);
		}
	}
}
// function drawBoard() {
// 	gameBoardElement.innerHTML = '';

// 	for (let row = 0; row < 20; row++) {
// 		for (let col = 0; col < 10; col++) {
// 			const block = document.createElement('div');
// 			block.style.backgroundColor = 'black';
// 			block.classList.add('cell');
// 			gameBoardElement.appendChild(block);
// 		}
// 	}
// }

// function drawTetrimino() {
// 	//const currentTetrimino = TETRIMINOS.I; // game logic

// 	currentTetrimino.forEach((row, rowIndex) => {
// 		row.forEach((cell, colIndex) => {
// 			if (cell == 1) {
// 				const block = document.createElement('div');
// 				// block.style.backgroundColor = 'cyan';
// 				block.classList.add('cell')
// 				const absoluteRow = currentTetriminoPosition.row + rowIndex;
// 				const absoluteCol = currentTetriminoPosition.col + colIndex;
// 				block.style.gridRow = `${absoluteRow + 1}`;
// 				block.style.gridColumn = `${absoluteCol + 1}`;
// 				gameBoardElement.appendChild(block);
// 			}
// 		})
// 	})
// }

function drawTetrimino(tetrimino, position, cellSize) {
	//console.log(tetrimino.color);
    tetrimino.shape.forEach((row, rowIndex) => {
        row.forEach((cell, colIndex) => {
            if (cell === 1) {
                ctx.fillStyle = tetrimino.color;
                ctx.fillRect(position.col * cellSize + colIndex * cellSize, position.row * cellSize + rowIndex * cellSize, cellSize, cellSize);
                ctx.strokeRect(position.col * cellSize + colIndex * cellSize, position.row * cellSize + rowIndex * cellSize, cellSize, cellSize);
            }
        });
    });
}
