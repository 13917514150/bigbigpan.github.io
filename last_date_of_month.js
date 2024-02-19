function getLastDateOfMonth(year, month) {
    // Month is zero-indexed, so we subtract 1 from the provided month
    const lastDate = new Date(year, month + 1, 0);
  
    // The above creates a date for the next month (month + 1), and setting day to 0 gives the last day of the current month
    return lastDate;
  }
  
  // Example usage: Get the last date of February 2024
  const lastDateOfFebruary2024 = getLastDateOfMonth(2024, 1);
  console.log(lastDateOfFebruary2024);
  
