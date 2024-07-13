//Logic for activity entry
import { saveActivity } from "./activityStorage.mjs";

export function initActivityEntry() {
  document.getElementById("activityForm").addEventListener("submit", function(event) {
      event.preventDefault(); //get rid of auto refresh page on submit
      //get form values
      const activityName= document.getElementById("activityName").value;
      const activityDate= document.getElementById("activityDate").value;
      const activityTime= document.getElementById("activityTime").value;
      const activityDescription= document.getElementById("activityDescription").value;
      const activityDuration= document.getElementById("activityDuration").value;
      const address= document.getElementById("address").value;
      const activityCost= document.getElementById("activityCost").value;
      const parkingFee= document.getElementById("parkingFee").value;
      const organizerName= document.getElementById("organizerName").value;
      const organizerEmail= document.getElementById("organizerEmail").value;

      console.log("Activity values gathered");

//creates activity objects
    const activity = {
      name: activityName,
      date: activityDate,
      time: activityTime,
      description: activityDescription,
      duration: activityDuration,
      address: address,
      cost: activityCost,
      parkingFee: parkingFee,
      organizerName: organizerName,
      organizerEmail: organizerEmail
    };

    console.log("Activity objects created");

     saveActivity(activity);

     console.log("Activity saved");
    });

    

    document.addEventListener("DOMContentLoaded", () => {
      const form = document.querySelector("form");
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        const activityName = document.querySelector("#activityName").value;
        const activityTime = document.querySelector("#activityTime").value;

        //ensure exist before accessing
        if (!activityName || !activityTime) {
          console.error("Activity name or time not found");
          return;
        }

        window.location.href = "../calendar/index.html";

        console.log("Form submitted", activityName, activityTime );

      });
    });
}

