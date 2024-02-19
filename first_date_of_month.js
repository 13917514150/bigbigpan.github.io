// Get the current date
const currentDate = new Date();
const curretYear = currentDate.getFullYear();
var currentMonth = currentDate.getMonth();
currentMonth ++;
console.log(currentDate);
console.log(curretYear);
console.log('Current month: ' + currentMonth);
// Set the date to the first day of the month
currentDate.setDate(1);

// Now, currentDate contains the first date of the current month
console.log(currentDate);
