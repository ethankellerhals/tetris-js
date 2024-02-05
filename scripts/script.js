import { TETRIMINOS } from "./tetriminos";

const ROWS = 20;
const COLS = 10;

let score = 0;

function drawBoard() {

}

function drawTetrimino() {

}

function getScore() {
	return score
}

function setScore(score, ) {

}

function moveLeft() {

}

function moveRight() {

}

function moveDown() {
	
}

function rotate(rotation) {

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





function game() {

}