//Main entry point for initializing the app
import { initLogin } from "./login.js";
import { initActivityEntry } from "./activityEntry.mjs";
import { initCalendar } from "./calendar.mjs";
import { initDetailModal } from "./detailModal.mjs";
import "./weather.js";
import { saveActivity, getActivities } from "./activityStorage.mjs";


//initialization functions
document.addEventListener("DOMContentLoaded", () => {
  initLogin();
  initActivityEntry();
  initCalendar();
  initDetailModal();

  console.log("main script loaded and initialized");
});

//prepopulate 3 activities
const initialActivities = [
    {
    id: "1",
    activityName: "Greenfield Village",
    activityTime: "10:00 am",
    activityDescription: "Outdoor & indoor activity of touring historical buildings & homes.",
    activityDuration: "4",
    address: "5500 Ford Way",
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
    address: "Jackson, MI",
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
    address: "Pinckney, MI",
    activityCost: "10.00",
    parkingFee: "0",
    organizerName: "John Doe",
    organizerEmail: "john@email.com"
  }
];

if (!getActivities().length) {
  initialActivities.forEach(activity => saveActivity(activity));
}
