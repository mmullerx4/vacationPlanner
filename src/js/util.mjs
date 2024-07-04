//Utility functions
//tying it all together
//functions shared across modules

//this function formats date to readable string
export function formatDate(date) {
  return new Date(date).toLocaleDateString();
}
