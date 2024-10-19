let startTime = 0;
let elapsedTime = 0;
let timerInterval;

document.getElementById("timer").textContent = "00:00:00";

function startTimer() {
  if (startTime === 0) {
    startTime = Date.now();
  } else {
    startTime = Date.now() - elapsedTime;
  }
  
  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    document.getElementById("timer").textContent = formatTime(elapsedTime);
  }, 10); // Update every 10 milliseconds
}

function stopTimer() {
  clearInterval(timerInterval);
  elapsedTime = Date.now() - startTime;
}

function resetTimer() {
  stopTimer();
  startTime = 0;
  elapsedTime = 0;
  document.getElementById("timer").textContent = "00:00:00";
}

function formatTime(time) {
  const totalSeconds = Math.floor(time / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  // Add leading zeros
  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  return formattedTime;
}

// Button click event listeners
document.getElementById("startBtn").addEventListener("click", startTimer);

document.getElementById("stopBtn").addEventListener("click", stopTimer);

document.getElementById("resetBtn").addEventListener("click", resetTimer);
