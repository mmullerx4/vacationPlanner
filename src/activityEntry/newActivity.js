//javascript for handling new activity entry
//take from form and add to calendar

//Where to take from form and add to activities.json??

document.getElementById("activityForm").addEventListener("submit", function(event) {
    event.preventDefault();
    //get form values
    const activityName= document.getElementById("activityName").value;
    const activityDate= document.getElementById("activityDate").value;
    const activityTime= document.getElementById("activityTime").value;

  //find correct date and add the activity to calendar
  const dateCells = document.querySelectorAll(".date"); //selects all with class of date & gives NodeList & store in dateCells
  dateCells.forEach(cell => { //for each date in dateCells
    if (cell.textContent === activityDate.split("-")[2]) { //check if matches activity date
      const activityElement = document.createElement("div"); //create & store
      activityElement.textContent = `${activityName} at ${activityTime}`
      cell.appendChild(activityElement);//add them to date cell
    }
    });
  });
 
 


