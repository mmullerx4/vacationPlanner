//Main entry point for initializing the app
//import all necessary modules and functions.
import { initLogin } from "./login.js";
import { initActivityEntry } from "./activityEntry.mjs";
import { initCalendar } from "./calendar.mjs";
import { initDetailModal } from "./detailModal.mjs";
import { initWeather } from "./weather.mjs";
import { saveActivity, getActivities } from "./activityStorage.mjs";
import { initialActivities } from "./activityStorage.mjs";


document.addEventListener("DOMContentLoaded", async () => {
  console.log("DOM fully loaded and parsed");
   

  try { 
    await initialActivities(); //wait to ensure completes

    console.log("main.js script loaded");
    
    initLogin();
    initActivityEntry();
    initDetailModal();
    initWeather();
    await initCalendar(); //because it returns a Promise (an object that represents the eventual completion (or failure) of an async operation and its resulting value).
    //Program keep working and I will promise to get that back to you when completed.
    console.log("main script loaded and initialized") 
    

    //check initial activities and then display them in console
    await checkInitialActivities();
    await displayActivitiesInConsole();
  } catch (error) {
    console.error("Error initializing:", error);
  }
});

//Help from chatgpt on error handling & troubleshooting
//The next 2 functions are helper functions to handle prepopulating and displaying activities.

async function checkInitialActivities() {
  try {
  const activities = await getActivities(); //get current list of activities from local storage
    if (activities.length === 0) { 
      console.log("Save startup 'initial activities' for testing because no previous activities.");
      for (const activity of initialActivities) {
        try { //feedback & error handling
          await saveActivity(activity);
          console.log(`Saved activity: ${activity.activityName}`);
        } catch (error) {
          console.error(`Error saving activity ${activity.activityName}`, error);
        }
      }
    } else {
      console.log("Initial activities already exist");
    }
    } catch (error) {
      console.error("Error checking or saving initial activities:",  error);
    }
  }

async function displayActivitiesInConsole() {
  try {
    const activities = await getActivities();
    console.log("Activities in local Storage:", activities);
  } catch (error) {
    console.error("Error retrieving activities from local Storage:", error)
  }
}


