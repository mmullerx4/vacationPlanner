//Module for storing activities

export function saveActivity
(activity) {
  let activities = JSON.parse(localStorage.getItem("activities")) || []; //creates a object array even if empty
  activities.push(activity);
  localStorage.setItem("activities", JSON.stringify(activities)); //converts back into array after the addition a activity & saves
  console.log("activity saved: ", activity);
}

export function getActivities() {
  return JSON.parse(localStorage.getItem("activities")) || [];
}

export function deleteActivity(activityId) {
  let activities = JSON.parse(localStorage.getItem("activities")) || [];
  activities = activities.filter(activity => activity.id !== activityId); //filter out the activity to be deleted
  localStorage.setItem("activities", JSON.stringify(activities));
  console.log("Activity deleted:", activityId);
}
