# Stopwatch App

A simple stopwatch application built using HTML, CSS, and JavaScript.

## Features
- Start, stop, and reset the stopwatch
- Displays the elapsed time in hours, minutes, and seconds
- Responsive button UI with smooth animations

## Pseudocode

### JavaScript Logic

1. **Variables**:
   - `startTime`: Store the start time and the time when the stopwatch was last stopped.
   - `elapsedTime`: Tracks the total elapsed time.
   - `timerInterval`: Used to control the start/stop of the timer.

2. **Start the Stopwatch**:
   - Record the `startTime`.
   - Use `setInterval` to update `elapsedTime` every second.
   - Format the elapsed time and update the display.
   - Disable the "Start" button to prevent multiple start actions.

3. **Stop the Stopwatch**:
   - Use `clearInterval` to stop updating the time.
   - Store the `updatedTime` to allow resuming the stopwatch.
   - Disable the "Stop" button.

4. **Reset the Stopwatch**:
   - Stop updating the time (`clearInterval`).
   - Reset `elapsedTime` to 0.
   - Update the display to show 0.
   - Re-enable the "Start" button.

5. **Time Calculation**:
   - Calculate hours, minutes, and seconds from `elapsedTime`.
   - Format time to display two digits for hours, minutes, and seconds.
   - Update the display element with the formatted time.

### HTML Structure

- **Display**: Add an element to display the stopwatch time.
- **Buttons**: Add event listeners to the Start, Stop, and Reset buttons to trigger the corresponding stopwatch functions.

## How to Use

1. **Start**: Press the "Start" button to begin the stopwatch.
2. **Stop**: Press the "Stop" button to pause the stopwatch.
3. **Reset**: Press the "Reset" button to reset the time to 0.

## Technologies Used

- **HTML**
- **CSS**
- **JavaScript**

## Deployment

- The live version of this app can be found [here](https://jdeebs.github.io/countdown-timer/).

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/jdeebs/countdown-timer.git
   ```
2. Open the `index.html` file in your browser to use the app.
