//Module for storing activities

export function saveActivity
(activity) {
  let activities = json.parse(localStorage.getItem("activities")) || []; //creates a object array even if empty
  activities.push(activity);
  localStorage.setItem("activities", JSON.stringify(activities)); //converts back into array after the addition a activity & saves
  console.log("activity saved: ", activity);
}

export function getActivities() {
  return JSON.parse(localStorage.getItem("activities")) || [];
}

export function deleteActivity(activityName) {
  let activities = JSON.parse(localStorage.getItem("activities")) || [];
  localStorage.setItem("activities", JSON.stringify(activities));
  console.log("Activity deleted:", activityName);
}
