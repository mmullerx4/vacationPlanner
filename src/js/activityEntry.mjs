//Logic for activity entry
import { saveActivity } from "./activityStorage.mjs";

export function initActivityEntry() {
  document.addEventListener("DOMContentLoaded", () => {
    const activityForm = document.getElementById("activityForm");

    if (activityForm) {
      activityForm.addEventListener("submit", function(event) {
        event.preventDefault(); //get rid of auto refresh page on submit

        //get form values
        const activityName= document.getElementById("activityName").value;
        const activityDate= document.getElementById("activityDate").value;
        const activityTime= document.getElementById("activityTime").value;
        const activityDescription= document.getElementById("activityDescription").value;
        const activityDuration= document.getElementById("activityDuration").value;
        const activityAddress= document.getElementById("activityAddress").value;
        const activityCost= document.getElementById("activityCost").value;
        const parkingFee= document.getElementById("parkingFee").value;
        const organizerName= document.getElementById("organizerName").value;
        const organizerEmail= document.getElementById("organizerEmail").value;


        if (!activityName || !activityTime) {
          console.error("Activity name or time not found");
          return;
        }

//creates activity objects
        const activity = {
          name: activityName,
          date: activityDate,
          time: activityTime,
          description: activityDescription,
          duration: activityDuration,
          activityAddress: activityAddress,
          cost: activityCost,
          parkingFee: parkingFee,
          organizerName: organizerName,
          organizerEmail: organizerEmail
        };

        saveActivity(activity);
        console.log("Activity saved");

        console.log("Redirecting to calendar page")
        window.location.href = "../calendar/index.html";
        console.log("Form submitted", activityName, activityTime);
     });
    } else {
      console.error("Activity form not found");
    }
  });
}
    

   
