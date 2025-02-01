
window.onload = function() {
  
    // Declare variable 'hours' and assign connection to the HTML element with the specified ID
    var hours = 00; 

    // Declare variable 'minutes' and assign connection to the HTML element with the specified ID
    var minutes = 00;

    // Declare variable 'seconds' and assign connection to the HTML element with the specified ID
    var seconds = 00; 

    // Declare variable 'milliseconds' and assign connection to the HTML element with the specified ID
    var milliseconds = 00; 	

    // Declare variables to attach hours, minutes, seconds, and milliseconds, and assign connections to the corresponding HTML elements
    var attachHours = document.getElementById("hours");
    var attachMinutes = document.getElementById("minutes");
    var attachSeconds = document.getElementById("seconds");
    var attachMilliseconds = document.getElementById("milliseconds");

    // Declare variables for start button, stop button, and reset button, and assign connections to the corresponding HTML elements
    var startButton = document.getElementById('start-button'); 
    var stopButton = document.getElementById('stop-button');
    var resetButton = document.getElementById('reset-button');

    // Declare variable for counting duration
    var interval;

    // When the start button is clicked
    startButton.onclick = function() {
       // Assign connection between the counting duration and the interval in milliseconds. 1 second is equal to 1000 milliseconds 
       interval = setInterval(countDuration, 10);
    }

    // When the stop button is clicked
    stopButton.onclick = function() {
        // Clear the interval	
        clearInterval(interval);
    }

    // When the reset button is clicked
    resetButton.onclick = function() {
        // Clear the interval	
        clearInterval(interval);

        // Assign connection between hours and the specified time in HTML 
        hours = "00"; 

        // Assign connection between minutes and the specified time in HTML	
        minutes = "00";

        // Assign connection between seconds and the specified time in HTML
        seconds = "00";

        // Assign connection between milliseconds and the specified time in HTML  
        milliseconds = "00";

        // Display on the screen hours, minutes, seconds, and milliseconds as zero  	
        attachHours.innerHTML = hours; 
        attachMinutes.innerHTML = minutes; 
        attachSeconds.innerHTML = seconds; 
        attachMilliseconds.innerHTML = milliseconds;
    }

    // Define how the countdown will be
    function countDuration() {
        // Start counting milliseconds
        milliseconds++; 

        // If it is less than 9, add a leading 0
        if(milliseconds < 9){
            attachMilliseconds.innerHTML = "0" + milliseconds;
        }

        if (milliseconds > 9){
            attachMilliseconds.innerHTML = milliseconds;      
        } 

        // Start counting seconds 
        // If milliseconds are greater than 99 	
        if (milliseconds > 99) {
            console.log("seconds");
            seconds++;		      	
            attachSeconds.innerHTML = "0" + seconds;
            milliseconds = 0;
            attachMilliseconds.innerHTML = "0" + 0;
        }

        if (seconds > 9){
            attachSeconds.innerHTML = seconds;
        }

        // Start counting minutes	
        // If seconds are greater than 59
        if (seconds > 59){
            console.log("minutes"); 
            minutes++; 
            attachMinutes.innerHTML = "0" + minutes; 
            seconds = 0; 
            attachSeconds.innerHTML = "0" + 0; 
        }

        if (minutes > 9){
            attachMinutes.innerHTML = minutes;
        }

        // Start counting hours 
        // If minutes are greater than 59
        if (minutes > 59){
            console.log("hours"); 
            hours++; 
            attachHours.innerHTML = "0" + hours; 
            minutes = 0; 
            attachMinutes.innerHTML = "0" + 0; 
        }

        if (hours > 9){
            attachHours.innerHTML = hours;
        }
    }
}

