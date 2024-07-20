//Module for storing activities
//chatgpt fine tuned me here
export function saveActivity
(activity) {
  //Retrieve existing activities or initialize an empty array
  let activities = JSON.parse(localStorage.getItem("activities")) || []; 

//Add new activity to the array
  activities.push(activity);

  localStorage.setItem("activities", JSON.stringify(activities)); //makes each piece of JSON array a string
  console.log("activity saved: ", activity);
}

export function getActivities() {
  //Retrieve activities from localStorage and parse them
  return JSON.parse(localStorage.getItem("activities")) || []; 
}

export function deleteActivity(activityId) {
  //Retrieve existing activities or initialize an empty array
  let activities = JSON.parse(localStorage.getItem("activities")) || [];

  activities = activities.filter(activity => activity.id !== activityId); //filter out the activity to be deleted

  //save back to local storage
  localStorage.setItem("activities", JSON.stringify(activities));

  console.log("Activity deleted:", activityId);
}
