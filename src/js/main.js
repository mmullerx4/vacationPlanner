//Main entry point for initializing the app
//import all necessary modules and functions.
import { initLogin } from "./login.js";
import { initActivityEntry } from "./activityEntry.mjs";
import { initCalendar } from "./calendar.mjs";
import { initDetailModal } from "./detailModal.mjs";
import { initWeather } from "./weather.mjs";
import { saveActivity, getActivities } from "./activityStorage.mjs";


//prepopulate 3 initial activities
const initialActivities = [
    {
    id: "1",
    activityName: "Henry Ford Greenfield Village",
    activityDescription: "Outdoor & indoor activity of touring historical buildings & homes.",
    activityDate: "07/24/2024",
    activityTime: "10:00 am",
    activityDuration: 4,
    activityStreet: "20900 Oakwood Blvd.",
    activityCity: "Dearborn",
    activityState: "MI",
    activityZip: 48124,
    activityCost: "45.00",
    parkingFee: "0",
    organizerName: "John Doe",
    organizerEmail: "john@email.com"
  },
  {
    id: "2",
    activityName: "The Parlour of Jackson",activityDescription: "The parlor has many flavors and combinations of ice creams",
    activityDate: "07/25/2024",
    activityTime: "6:00 pm",
    activityDuration: 2,
    activityStreet: "1401 Daniel Rd.",
    activityCity: "Jackson",
    activityState: "MI",
    activityZip: 49202,
    activityCost: "10.00",
    parkingFee: "0",
    organizerName: "Jane Smith",
    organizerEmail: "jane@email.com"
  },
  {
    id: "3",
    activityName: "Silver Lake Beach in Pinckney",
    activityDescription: "204 acres in size,the nearby state park beach has a concession stand and rest rooms with changing stalls.",
    activityDate: "07/26/2024",
    activityTime: "2:00 pm",
    activityDuration: 3,
    activityStreet: "2 Crooked Lake Trail",
    activityCity: "Pinckney",
    activityState: "MI",
    activityZip: 48169,
    activityCost: "10.00",
    parkingFee: "0",
    organizerName: "John Doe",
    organizerEmail: "john@email.com"
  }
];

//Help from chatgpt on error handling & troubleshooting
//The next 2 functions are helper functions to handle prepopulating and displaying activities.

async function checkInitialActivities() {
  try {
  const activities = await getActivities(); //get current list of activities from local storage
   
    if (activities.length === 0) { 
      //1
      console.log("Save startup 'initial activities' for testing because no previous activities.");
      for (const activity of initialActivities) {
        try { //feedback & error handling
          await saveActivity(activity);
          //2
          console.log(`Saved activity: ${activity.activityName}`);
        } catch (error) {
          console.error(`Error saving activity ${activity.activityName}`, error);
        }
      }
    } else {
      //3 (1)
      console.log("Initial activities already exist");
    }
    } catch (error) {
      console.error("Error checking or saving initial activities:",  error);
    }
  }

async function displayActivitiesInConsole() {
  try {
    const activities = await getActivities();
    //4 (2)
    console.log("Activities in local Storage:", activities);
  } catch (error) {
    console.error("Error retrieving activities from local Storage:", error)
  }
}

//Main initialization
//initializes all the modules and then runs the helper functions above.
//5 (3)
console.log("main.js script loaded");
document.addEventListener("DOMContentLoaded", async () => {
  try { //called when document fully loaded
    initLogin();
    initActivityEntry();
    initDetailModal();
    initWeather();
    await initCalendar(); //changed function to async and now works
    //6 (4)
    console.log("main script loaded and initialized");

    //check initial activities and then display them in console
    await checkInitialActivities();
    await displayActivitiesInConsole();
  } catch (error) {
    console.error("Error initializing:", error);
  }
});


