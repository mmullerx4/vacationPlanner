//generate calendar
function generate(month, year) {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  const calendarContainer = document.querySelector(".calendar");

  //clear previous calendar content
  calendarContainer.innerHTML = "";

  //Create headers for days of the week
   const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
   const headerRow = document.createElement("div");
   headerRow.classList.add("header");
   daysOfWeek.forEach(day => {
    const dayElement = document.createElement("div");
   dayElement.textContent = day;
   headerRow.appendChild(dayElement);
});
  calendarContainer.appendChild(headerRow);

  //calculate number of cells needed in the grid (including empty cells)
  const totalCells = daysInMonth + firstDay;

  //Create cells for the 
  for (let i = 0; i < totalCells; i++) {
    const cell = document.createElement("div");
    if (i >= firstDay) {
      cell.textContent = i - firstDay + 1; //Display day of the month
    }
    calendarContainer.apendChild(cell);
  }
}

//example usage
//generateCalendar(2, 2024));
