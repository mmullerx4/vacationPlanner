//Module for storing activities

export function saveActivity
(activity) {
  let activities = json.parse(localStorage.getItem("activities")) || [];
  activities.push(activity);
  localStorage.setItem("activities", JSON.stringify(activities));
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
