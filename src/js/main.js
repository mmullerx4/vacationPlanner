//Main entry point for initializing the app
import { initLogin } from "./login.js";
import { initActivityEntry } from "./activityEntry.mjs";
import { initCalendar } from "./calendar.mjs";
import { initDetailModal } from "./detailModal.mjs";
import { initWeather } from "./weather.mjs";
import { saveActivity, getActivities } from "./activityStorage.mjs";


//initialization functions
document.addEventListener("DOMContentLoaded", async () => {
  try {
    initLogin();
    initActivityEntry();
    initDetailModal();
    initWeather();

    console.log("main script loaded and initialized");
  } catch (error) {
    console.error("Error initializing:", error);
  }
});

//prepopulate 3 activities
const initialActivities = [
    {
    id: "1",
    activityName: "Greenfield Village",
    activityTime: "10:00 am",
    activityDescription: "Outdoor & indoor activity of touring historical buildings & homes.",
    activityDuration: "4",
    activityAddress: "5500 Ford Way",
    activityCost: "45.00",
    parkingFee: "0",
    organizerName: "John Doe",
    organizerEmail: "john@email.com"
  },
  {
    id: "2",
    activityName: "Jackson Ice Cream Parlor",
    activityTime: "6:00 pm",
    activityDescription: "The parlor has many flavors and combinations of ice creams",
    activityDuration: "1",
    activityAddress: "Jackson, MI",
    activityCost: "10.00",
    parkingFee: "0",
    organizerName: "Jane Smith",
    organizerEmail: "jane@email.com"
  },
  {
    id: "3",
    activityName: "Silver Lake Beach",
    activityTime: "2:00 pm",
    activityDescription: "The nearby beach has a concession stand and rest rooms with changing stalls.",
    activityDuration: "3",
    activityAddress: "Pinckney, MI",
    activityCost: "10.00",
    parkingFee: "0",
    organizerName: "John Doe",
    organizerEmail: "john@email.com"
  }
];

//Help from chatgpt on error handling & troubleshooting
async function checkInitialActivities() {
  try {
  const activities = await getActivities(); //get current list of activities from local storage
   
  if (activities.length === 0) { 
    console.log("Save startup 'initial activities' for testing because no previous activities.")
    initialActivities.forEach(activity => {
      try { //feedback & error handling
        saveActivity(activity);
        console.log(`Saved activity: ${activity.activityName}`);
      } catch (error) {
        console.error(`Error saving activity ${activity.activityName}`, error);
      }
    });
    console.log("Initial activities checked and saved if no current");
  } else {
    console.log("Initial activities already exist");
  }
  } catch (error) {
    console.error("Error checking or saving initial activities:",  error);
  }
}


checkInitialActivities();
//this placed right?

 
console.log("calendar loaded");
