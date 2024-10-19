let startTime = 0;
let elapsedTime = 0;
let timerInterval;

function startTimer() {
    startTime = Date.now();
    timerInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        document.getElementById("timer").textContent = formatTime(elapsedTime);
    }, 10); // Update every 10 milliseconds
}

function stopTimer() {
    clearInterval(timerInterval);
}

function resetTimer() {}

function formatTime(time) {
    const totalSeconds = Math.floor(time / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    const milliseconds = Math.floor(time / 10);

    // Add leading zeros
    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString()}`;

    return formattedTime;
}

// Button click event listeners
document.getElementById("startBtn").addEventListener("click", startTimer);

document.getElementById("stopBtn").addEventListener("click", stopTimer);

document.getElementById("resetBtn").addEventListener("click", resetTimer);