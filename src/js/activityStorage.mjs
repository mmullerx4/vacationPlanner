//Module for storing activities

export function saveActivity
(activity) {
  let activities = JSON.parse(localStorage.getItem("activities")) || []; //a new object that is a JSON array even if empty
  activities.push(activity);
  localStorage.setItem("activities", JSON.stringify(activities)); //makes each piece of JSON array a string
  console.log("activity saved: ", activity);
}

export function getActivities() {
  return JSON.parse(localStorage.getItem("activities")) || []; //parses string into a JSON array
}

export function deleteActivity(activityId) {
  let activities = JSON.parse(localStorage.getItem("activities")) || [];
  activities = activities.filter(activity => activity.id !== activityId); //filter out the activity to be deleted
  localStorage.setItem("activities", JSON.stringify(activities));
  console.log("Activity deleted:", activityId);
}
