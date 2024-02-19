// Get the current date
const currentDate = new Date();
const curretYear = currentDate.getFullYear();
var currentMonth = currentDate.getMonth();
currentMonth ++;
console.log(`This Year : ${curretYear}`);
const ThisMonth = 'This Month   ' + currentMonth;
console.log(ThisMonth);
// Set the date to the first day of the month
currentDate.setDate(1);

// Now, currentDate contains the first date of the current month
console.log(currentDate);
