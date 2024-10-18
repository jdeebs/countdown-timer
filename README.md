Pseudocode for the Countdown Timer App

#JS

Track the current time (elapsedTime).
Declare a variable to control start/stop (intervalId).
Store the start time and updated time (startTime, updatedTime).

Start the stopwatch.
Record the startTime.
Declare a variable (setInterval) to update the elapsedTime every second.
Update display with formatted time.
Disable start button to prevent multiple starts.

Stop the stopwatch.
Declare a variable to stop updating the time (clearInterval).
Store the updatedTime to allow resume if restarted.

Reset the stopwatch.
Stop updating the time (clearInterval).
Reset the current time to 0 (elapsedTime).
Update display to show 0.
Re-enable start button.

Calculate the hours, minutes, and seconds from elapsedTime.
Format time to display two digits for hours, minutes, and seconds.
Update display element with formatted time.


#HTML

Add display element to show stopwatch time.
Add event listener to start, stop, and reset button.