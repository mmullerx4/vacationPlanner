//Utility functions

//converts date string into JavaScript Date object
//Extracts the year, month, day from date object
//the month and day are two digits
export function formatDate(date) {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function toTitleCase(str) {
  return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}


//change from Military time to Standard time
export function formatTime24to12(time24) {
  const [hour, minute] = time24.split(":").map(Number);
  const period = hour >= 12 ? "PM" : "AM";
  const hour12 = hour % 12 || 12; //convert to 12hr format
  return `${hour12}:${String(minute).padStart(2, '0')} ${period}`;
 }

