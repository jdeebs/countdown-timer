let startTime = 0;
let elapsedTime = 0;
let timerInterval;

function startTimer() {
    startTime = Date.now();
    timerInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        document.getElementById("timer").textContent = formatTime(elapsedTime);
    }, 100); // Update every 100 milliseconds
}

function stopTimer() {}

function resetTimer() {}

// Button click event listeners
document.getElementById("startBtn").addEventListener("click", startTimer);

document.getElementById("stopBtn").addEventListener("click", stopTimer);

document.getElementById("resetBtn").addEventListener("click", resetTimer);