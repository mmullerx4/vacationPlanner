//Logic for activity entry
import { saveActivity } from "./activityStorage.mjs"; //importing to be able to save at the end this file.

export function initActivityEntry() {
  console.log("initActivityEntry function called");
  
  document.addEventListener("DOMContentLoaded", () => { //DOMContentLoaded fires when html loaded with script tags. Does not wait for imgs, subframes, & async.
    console.log("DOMContentLoaded event fired"); //error handling - trouble shooting

    const activityForm = document.getElementById("activityForm");
      console.log("activityForm:", activityForm);

      if (!activityForm) {
        console.error("Activity form not found"); //error handling
        return;
      }    

      activityForm.addEventListener("submit", function(event) {
        event.preventDefault(); //get rid of auto refresh page on submit
        console.log("Form submit event fired");

        //get form values
        const name= document.getElementById("name").value;
        const date= document.getElementById("date").value;
        const time= document.getElementById("time").value;
        const description= document.getElementById("description").value;
        const duration= document.getElementById("duration").value;
        const street= document.getElementById("street").value;
        const city= document.getElementById("city").value;
        const state= document.getElementById("state").value;
        const zip= document.getElementById("zip").value;
        const cost= document.getElementById("cost").value;
        const parkingFee= document.getElementById("parkingFee").value;
        const organizerName= document.getElementById("organizerName").value;
        const organizerEmail= document.getElementById("organizerEmail").value;

        console.log("Form values:", { //check to see if got values
          name,
          date,
          time,
          description,
          duration,
          street,
          city,
          state,
          zip,
          cost,
          parkingFee,
          organizerName,
          organizerEmail
        });

        if (!name || !time) { //error handling
          console.error("Activity name or time not found");
          return;
        }

//creates activity objects 
        const activity = {
          name: name,
          date: date,
          time: time,
          description: description,
          duration: duration,
          street: street,
          city: city,
          state: state,
          zip: zip,
          cost: cost,
          parkingFee: parkingFee,
          organizerName: organizerName,
          organizerEmail: organizerEmail
        };

        console.log("Activity object created", activity);
        
        saveActivity(activity);
        console.log("Activity saved");

        activityForm.reset(); //reset form for next entry

        window.location.href = "../calendar/index.html";

        
     }); 
  });
}
    

   
