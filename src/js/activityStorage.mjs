//Module for storing activities


    //prepopulate 3 initial activities
    const initialActivities = [
      {
      id: "1",
      activityName: "Henry Ford Greenfield Village",
      activityDescription: "Outdoor & indoor activity of touring historical buildings & homes.",
      activityDate: "2024-07-29",
      activityTime: "10:00 AM",
      activityDuration: "4",
      activityStreet: "20900 Oakwood Blvd.",
      activityCity: "Dearborn",
      activityState: "MI",
      activityZip: "48124",
      activityCost: "45.00",
      parkingFee: "0",
      organizerName: "John Doe",
      organizerEmail: "john@email.com"
    },
    {
      id: "2",
      activityName: "The Parlour of Jackson",activityDescription: "The parlor has many flavors and combinations of ice creams",
      activityDate: "2024-07-30",
      activityTime: "6:00 PM",
      activityDuration: "2",
      activityStreet: "1401 Daniel Rd.",
      activityCity: "Jackson",
      activityState: "MI",
      activityZip: "49202",
      activityCost: "10.00",
      parkingFee: "0",
      organizerName: "Jane Smith",
      organizerEmail: "jane@email.com"
    },
    {
      id: "3",
      activityName: "Silver Lake Beach in Pinckney",
      activityDescription: "204 acres in size,the nearby state park beach has a concession stand and rest rooms with changing stalls.",
      activityDate: "2024-07-31",
      activityTime: "2:00 PM",
      activityDuration: "3",
      activityStreet: "2 Crooked Lake Trail",
      activityCity: "Pinckney",
      activityState: "MI",
      activityZip: "48169",
      activityCost: "10.00",
      parkingFee: "0",
      organizerName: "John Doe",
      organizerEmail: "john@email.com"
    }
    ];

export function initializeActivities() {
  const activitiesKey = "activities";

  if (!localStorage.getItem(activitiesKey)) {
    localStorage.setItem(activitiesKey, JSON.stringify(initialActivities));
  } else {
    console.log("Activities already exist in localStorage");
  }
  
}


export async function saveActivity(activity) {
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


