//Logic for activity entry
import { saveActivity } from "./activityStorage.mjs";

export function initActivityEntry() {
  document.addEventListener("DOMContentLoaded", () => {
    console.log("DOMContentLoaded event fired");

    const activityForm = document.getElementById("activityForm");
      console.log("activityForm:", activityForm);

    if (activityForm) {
      activityForm.addEventListener("submit", function(event) {
        event.preventDefault(); //get rid of auto refresh page on submit
        console.log("Form submit event fired");

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

        console.log("Form values:", {
          activityName,
          activityDate,
          activityTime,
          activityDescription,
          activityDuration,
          activityAddress,
          activityCost,
          parkingFee,
          organizerName,
          organizerEmail
        });

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

        console.log("Activity object created", activity);
        
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
    

   
