// Set the start date: January 29, 2001
const startDate = new Date("2001-01-29T00:00:00Z");

function updateCounter() {
    // Get the current time
    const now = new Date();

    // Calculate the difference in seconds
    let secondsElapsed = Math.floor((now - startDate) / 1000);

    // Calculate hours, minutes, and seconds
    const hours = Math.floor(secondsElapsed / 3600);
    secondsElapsed %= 3600;
    const minutes = Math.floor(secondsElapsed / 60);
    const seconds = secondsElapsed % 60;

    // Format to hh:mm:ss
    const formattedTime = 
        String(hours).padStart(2, '0') + ": " + 
        String(minutes).padStart(2, '0') + ": " + 
        String(seconds).padStart(2, '0');

    // Display the result in the h1 tag
    document.getElementById("mainTitle").textContent = formattedTime;
}

// Update the counter every second
setInterval(updateCounter, 1000);

// Initial call to display the counter immediately on page load
updateCounter();

