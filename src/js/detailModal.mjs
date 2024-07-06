//Logic for detail modal

export function initDetailModal() {
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
}
