//Logic for activity entry

export function initActivityEntry() {
  document.getElementById("activityForm").addEventListener("submit", function(event) {
      event.preventDefault();
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

    
    const dateCells = document.querySelectorAll(".date");
    dateCells.forEach(cell => { //for each date in dateCells
      if (cell.textContent === activityDate.split("-")[2]) { //check if matches activity date
        const activityElement = document.createElement("div"); //create & store for calendar & modal
        activityElement.textContent = `${activityName} at ${activityTime}`;
        activityElement.classList.add("activity");
        activityElement.dataset.description = activityDescription;
        activityElement.dataset.duration = activityDuration;
        activityElement.dataset.address = address;
        activityElement.dataset.cost = activityCost;
        activityElement.dataset.parkingFee = parkingFee;
        activityElement.dataset.organizerName = organizerName;
        activityElement.dataset.organizerEmail = organizerEmail;
        cell.appendChild(activityElement);//add them to date cell of calendar
      }
      });
    });
}

  
 
 


