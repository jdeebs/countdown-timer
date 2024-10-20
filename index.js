// Initialize variables
let startTime = 0; // Stores timestamp when timer starts/resumes
let elapsedTime = 0; // Tracks total time passed in milliseconds
let timerInterval; // Holds the ID to control the timer

// Button elements
const startButton = document.getElementById("startBtn");
const stopButton = document.getElementById("stopBtn");
const resetButton = document.getElementById("resetBtn");

// Default display for timer
document.getElementById("timer").textContent = "00:00:00";

function startTimer() {
  // If starting for the first time
  if (startTime === 0) {
    startTime = Date.now(); // Set to current timestamp
  } else {
    // If resuming, adjust startTime to account for elapsed time
    startTime = Date.now() - elapsedTime;
  }
  // Disable the start button while timer is running
  startButton.disabled = true;
  // Enable stop button after timer starts
  stopButton.disabled = false;

  // Create new interval to update every 1000ms
  timerInterval = setInterval(() => {
    // Calculate elapsed time by subtracting startTime from current time
    elapsedTime = Date.now() - startTime;
    // Update timer with formatted time
    document.getElementById("timer").textContent = formatTime(elapsedTime);
  }, 1000);
}

function stopTimer() {
  // If timer is running
  if (startButton.disabled === true) {
    // Stops the interval, pausing the timer
    clearInterval(timerInterval);
    // Store elapsed time so it can be resumed later
    elapsedTime = Date.now() - startTime;
    // Enable start button while timer is paused
    startButton.disabled = false;
    // Disable stop button after pause
    stopButton.disabled = true;
  } else null;
}

function resetTimer() {
  stopTimer();
  startTime = 0;
  elapsedTime = 0;
  document.getElementById("timer").textContent = "00:00:00";
  // Ensure start/stop button is enabled after reset
  startButton.disabled = false;
  stopButton.disabled = false;
}

function formatTime(time) {
  // Convert milliseconds to total seconds and calculate relevant timer metrics
  const totalSeconds = Math.floor(time / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  // Format hours, minutes, and seconds to always show two digits
  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  return formattedTime;
}

// Button click event listeners
document.getElementById("startBtn").addEventListener("click", startTimer);

document.getElementById("stopBtn").addEventListener("click", stopTimer);

document.getElementById("resetBtn").addEventListener("click", resetTimer);
