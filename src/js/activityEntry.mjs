//Logic for activity entry
import { saveActivity } from "./activityStorage.mjs";

export function initActivityEntry() {
  document.getElementById("activityForm").addEventListener("submit", function(event) {
      event.preventDefault(); //get rid of auto refresh page on submit
      console.log("Form submitted");
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

//do I really need this?
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

     saveActivity(activity);
    });
}



 


