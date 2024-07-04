//Logic for activity entry

document.getElementById("activityForm").addEventListener("submit", function(event) {
    event.preventDefault();
    //get form values
    const activityName= document.getElementById("activityName").value;
    const activityDate= document.getElementById("activityDate").value;
    const activityTime= document.getElementById("activityTime").value;
    const activityDescription= document.getElementById("activitydescription").value;
    const activityDuration= document.getElementById("activityDuration").value;
    const address= document.getElementById("address").value;
    const activityCost= document.getElementById("activityCost").value;
    const activityFee= document.getElementById("activityFee").value;
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

  //to click on activity name for details
  document.addEventListener("click", function(event) {
    if (event.target.classList.contains("activity")) {
      const description = event.target.dataset.description;
      const duration = event.target.dataset.duration;
      const address = event.target.dataset.address;
      const cost = event.target.dataset.cost;
      const parkingFee = event.target.dataset.parkingFee;
      const organizerName = event.target.dataset.organizerName;
      const organizerEmail = event.target.dataset.organizerEmail;

      //Display activity details in a modal
  const modal = document.getElementById("activityModal");
  const modalContent = document.getElementById("modalContent");
  modalContent.innerHTML = `
  <p><strong>Description:</strong> ${description}<\p>
  <p><strong>Duration:</strong> ${duration}<\p>
  <p><strong>Location:</strong> ${address}<\p>
  <p><strong>Cost:</strong> ${cost}<\p>
  <p><strong>Parking Fee:</strong> ${parkingFee}<\p>
  <p><strong>Organizer Name:</strong> ${organizerName}<\p>
  <p><strong>Organizer Email:</strong> ${organizerEmail}<\p>
    `;
  modal.style.display = "block";
  }
  });

  //close the modal
  const modal = document.getElementById("activityModal");
  const span = document.getElementsByClassName("close")[0];
  span.onclick = function() {
    modal.style.display = "none";
  };
  window.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };

  
 
 


