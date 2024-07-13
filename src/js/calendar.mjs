//Logic for calendar
//got total help here from chatgpt
import { getActivities } from  "./activityStorage.mjs";
import { formatDate } from "./util.mjs";

//calculates & generates calendar for month & year
export function initCalendar() {
  function generateCalendar(month, year) {
    const daysInMonth = new Date(year, month + 1, 0).getDate(); //calculates the total number of days in particular month
    const firstDay = new Date(year, month, 1).getDay(); //retrieves the day of the week of the first day of the month
    const calendarContainer = document.querySelector(".calendar"); //selects the DOM element with the class '.calendar'

    //clear previous calendar content
    calendarContainer.innerHTML = "";

    //Create headers for days of the week & appends them to calendarContainer
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
    //Create cells for the activities by date, sets the text content to day, & stores the date in 'dataset.date'.
    for (let i = 0; i < totalCells; i++) {
      const cell = document.createElement("div");
      cell.classList.add("date");
      if (i >= firstDay) {
        const day = i - firstDay + 1;
        cell.textContent = day; //display day of month
        cell.dataset.date = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`; //(store the date) grabs year, adjusts month to be zero based, converts to string, pads month with a 0 to make 2 digit.
      }
      calendarContainer.appendChild(cell);
     }

     //Retrieve activities from storage module. Iterates through each activity using 'formatDate' and display in correct cell. Then creates activityElement for each activity & appends to cell
     const activities = getActivites();
     activities.forEach(activity => {
      const activityDate = formatDate(activity.date);
      const cell = document.querySelector(`.date[date-date="${activityDate}]`);
      if (cell) {
        const activityElement = document.createElement("div");
        activityElement.classList.add("activity");
        activityElement.textContent = `${activity.name} ($activity.time})`;
        activityElement.dataset.description = activity.description;
        activityElement.dataset.duration = activity.duration;
        activityElement.dataset.address = activity.address;
        activityElement.dataset.cost = activity.cost;
        activityElement.dataset.parkingFee = activity.parkingFee;
        activityElement.dataset.organizerName = activity.organizerName;
        activityElement.dataset.organizerEmail = activity.organizerEmail;
        cell.appendChild(activityElement);
      }
     });
  }
    

  //Listens for the 'DOMContentLoaded' event to ensure DOM is fully loaded before initializing calendar. Then calls the function with current month and year.
  document.addEventListener("DOMContentLoaded", () => {
      const today = new Date();
      generateCalendar(today.getMonth(), today.getFullYear());
      console.log("Calendar generated");
    });

}


// //example usage
// //generateCalendar(2, 2024));
