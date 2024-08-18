
const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');
const scoreElement = document.getElementById('score');
const jumpBtn = document.getElementById('jump');
const playBtn = document.getElementById('play');
const resetBtn = document.getElementById('playAgain');
const Over = document.getElementById('over');

let score = 0;
let isJumping = false;
let gameOver = false

// function saveToStorage() {
//     localStorage.setItem('score', score)
// }
let highScore = localStorage.getItem('highScore') || 0;
function updateScoreDisplay() {
    scoreElement.textContent = `Score: ${score} | High Score: ${highScore}`;
}

function jump() {
    if (isJumping || gameOver) return;
    isJumping = true;
    dino.classList.add('jump');
    dino.style.bottom = "120px"
    setTimeout(() => {
        dino.classList.remove('jump');
        dino.style.bottom = "50px"
        isJumping = false;
    }, 300);
}

function updateScore() {
    if (gameOver) return;
    score++;
    scoreElement.textContent = `Score: ${score}`;


}
function checkCollision() {
    const dinoRect = dino.getBoundingClientRect();
    const cactusRect = cactus.getBoundingClientRect();

    if (
        dinoRect.top < cactusRect.bottom &&
        dinoRect.left < cactusRect.right &&
        dinoRect.right > cactusRect.left &&
        dinoRect.bottom > cactusRect.top
    ) {
        gameOver = true;


        stopTimer();
        if (score > highScore) {
            highScore = score;
            localStorage.setItem('highScore', highScore);
            Over.textContent = ` New Record Congratulation!`
        }
        updateScoreDisplay();
        Over.textContent = `Game Over! Your score is ${score}`
    }
}

function moveCactus() {
    if (gameOver) return;
    const cactusLeft = parseFloat(getComputedStyle(cactus).right);
    cactus.style.right = cactusLeft + 2 + 'px';

    if (parseFloat(getComputedStyle(cactus).right) > window.innerWidth) {
        cactus.style.right = '-30px';
        updateScore();

    }
    startTimer();
    checkCollision();

}


jumpBtn.addEventListener('click', () => {
    dino.classList.add('jump');
    dino.style.bottom = "90px"
    setTimeout(() => {
        dino.classList.remove('jump');
        dino.style.bottom = "50px"
    }, 500);

})
playBtn.addEventListener('click', () => {

    setInterval(moveCactus, 20);


})
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        jump();
    }
});
updateScoreDisplay();

resetBtn.addEventListener('click', () => {
    resetTimer();
    location.reload();
    setInterval(moveCactus, 20);

});

let display = document.getElementById('timer');
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function startTimer() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(updateTimer, 10);
        isRunning = true;

    }
}
function stopTimer() {
    if (isRunning) {
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}
function resetTimer() {
    isRunning = false;
    startTime = 0;
    elapsedTime = 0;
    display.textContent = `00:00:00:00`;


}
function updateTimer() {
    elapsedTime = Date.now() - startTime;
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let miliseconds = Math.floor(elapsedTime % 1000 / 10);

    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');
    miliseconds = String(miliseconds).padStart(2, '0');
    display.textContent = `${hours}:${minutes}:${seconds}:${miliseconds}`

}