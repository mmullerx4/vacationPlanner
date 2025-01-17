//Logic for detail modal
//Researched information and then chatgpt
export function initDetailModal() {
  document.addEventListener("DOMContentLoaded", function() { //DOM ensures executes only when fully loaded.
    const modal = document.getElementById("activityModal");
    const closeButton = document.getElementById("close");

    if (!modal || !closeButton) { //error handling
      console.error("Modal or close button not found.");
      return;
    }
    
    //function to close the modal
    function closeModal() { //display of "x".
      modal.style.display = "none";
      window.location.href = "../calendar.html";
    }

  //close modal when close button ("X") is clicked
    closeButton.addEventListener("click", closeModal);

    window.onclick = function(event) {
      if (event.target === modal) {
        closeModal();
      }  
    };

  //to click on activity name for details (modal)
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
            const modalContent = document.getElementById("modalContent");
            modalContent.innerHTML = `
              <h2>${activityName}</h2>
              <p><strong>Description:</strong> ${description}</p>
              <p><strong>Duration:</strong> ${duration}</p>
              <p><strong>Location:</strong> ${address}</p>
              <p><strong>Cost:</strong> ${cost}</p>
              <p><strong>Parking Fee:</strong> ${parkingFee}</p>
              <p><strong>Organizer Name:</strong> ${organizerName}</p>
              <p><strong>Organizer Email:</strong> ${organizerEmail}</p>
            `;
            modal.style.display = "block";
        }
    });
  });
}
    
