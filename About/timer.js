// Set the start date: January 29, 2001
const startDate = new Date("2001-01-29T00:00:00Z");

// Function to check if a given year is a leap year
function isLeapYear(year) {
    return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
}

function updateCounter() {
    // Get the current time
    const now = new Date();

    // Calculate the difference in milliseconds
    let timeElapsed = now - startDate;

    // Calculate years, months, and days
    const years = now.getUTCFullYear() - startDate.getUTCFullYear();
    const months = now.getUTCMonth() - startDate.getUTCMonth();
    let days = now.getUTCDate() - startDate.getUTCDate();

    // If the current month and day are less than the start month and day, adjust for negative values
    let adjustedMonths = months < 0 ? months + 12 : months;
    let adjustedYears = months < 0 ? years - 1 : years;

    // Now adjust for leap years in the range between the start year and current year
    let leapYears = 0;
    for (let year = startDate.getUTCFullYear(); year < now.getUTCFullYear(); year++) {
        if (isLeapYear(year)) {
            leapYears++;
        }
    }

    // Calculate the total number of days
    const daysInYear = isLeapYear(now.getUTCFullYear()) ? 366 : 365;
    const totalDays = adjustedYears * daysInYear + leapYears + days;

    // Calculate hours, minutes, and seconds
    // First, get the remaining milliseconds after adjusting for years and months
    timeElapsed -= adjustedYears * 365.25 * 24 * 60 * 60 * 1000;  // Adjust for years
    timeElapsed -= adjustedMonths * 30.44 * 24 * 60 * 60 * 1000;  // Adjust for months (approx 30.44 days/month)
    timeElapsed -= days * 24 * 60 * 60 * 1000;  // Adjust for days

    // Now calculate hours, minutes, and seconds
    const hours = Math.floor((timeElapsed / (1000 * 60 * 60)) % 24); // Cap hours at 24
    timeElapsed %= (1000 * 60 * 60); // Remaining milliseconds after hours
    const minutes = Math.floor(timeElapsed / (1000 * 60));
    const seconds = Math.floor((timeElapsed % (1000 * 60)) / 1000);

    // Ensure days are positive
    days = Math.abs(days);

    // Format to years:months:days:hours:minutes:seconds
    const formattedTime =
        adjustedYears + " : " +
        String(adjustedMonths).padStart(2, '0') + " : " +
        String(days).padStart(2, '0') + " : " +
        String(hours).padStart(2, '0') + " : " +
        String(minutes).padStart(2, '0') + " : " +
        String(seconds).padStart(2, '0');

    // Display the result in the h1 tag
    document.getElementById("mainTitle").textContent = formattedTime;
}

// Update the counter every second
setInterval(updateCounter, 1000);

// Initial call to display the counter immediately on page load
updateCounter();

