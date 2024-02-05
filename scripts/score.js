

let score = 0;
const scoreElement = document.getElementById('score');


export function updateScore() {
	score += 10;
	scoreElement.textContent = score.toString();
}