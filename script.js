// Clock made on Tuesday, October 15 2024.

// Retrieving HTML elements for time display 
var hour = document.querySelector('.hour');
var date = document.querySelector('.date');

// Function to display time
var clockDisplay = function() {
    // Variable declaration
    var today, hours, minutes, seconds, day, daysList, dayName, month, monthsList, year;

    // Retrieving the current date
    today = new Date();

    // Retrieving the current date number
    // getDay() returns the number of the day of the month, here 15 for October 15
    day = today.getDate();

    // Retrieving the day of the week
    // getDay() returns the index of the current day of the week, here 2 for Tuesday
    daysList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    dayName = daysList[today.getDay()];
   
    // Retrieve current month
    // getMonth() returns the index of the current month, here 9 for October
    monthsList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; 
    month = monthsList[today.getMonth()];

    // Retrieve current year
    year = today.getFullYear();

   // Display hours, minutes, seconds always with 2 digits
    var twoNumbers = function(hour) {
        twoNumbersDisplay = (hour < 10) ? '0' + hour : hour;
        return twoNumbersDisplay;
    }

    // Retrieve hours, minutes, seconds
    hours = twoNumbers(today.getHours());
    minutes = twoNumbers(today.getMinutes());
    seconds = twoNumbers(today.getSeconds());

    // Display in our HTML elements
    hour.textContent = hours + ':' + minutes + ':' + seconds;
    date.textContent = dayName + ',' + ' ' + day + ' ' + month + ' ' + year;

    // Call the function every 1000 milliseconds (1 second)
    setTimeout(clockDisplay, 1000);
}

// Call the function
clockDisplay();



