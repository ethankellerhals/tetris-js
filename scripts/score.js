

let score = 0;
const scoreElement = document.getElementById('score');


export function updateScore(x) {
	score += x;
	scoreElement.textContent = score.toString();
}