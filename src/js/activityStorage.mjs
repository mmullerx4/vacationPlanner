//Module for storing activities


    //prepopulate 3 initial activities
    const initialActivities = [
      {
      id: "1",
      name: "Henry Ford Greenfield Village",
      description: "Outdoor & indoor activity of touring historical buildings & homes.",
      date: "2024-07-29",
      time: "10:00 AM",
      duration: 4,
      street: "20900 Oakwood Blvd.",
      city: "Dearborn",
      state: "MI",
      zip: "48124",
      cost: 45.00,
      parkingFee: 2.00,
      organizerName: "John Doe",
      organizerEmail: "john@email.com"
    },
    {
      id: "2",
      name: "The Parlour of Jackson",description: "The parlor has many flavors and combinations of ice creams",
      date: "2024-07-30",
      time: "6:00 PM",
      duration: 2,
      street: "1401 Daniel Rd.",
      city: "Jackson",
      state: "MI",
      zip: "49202",
      cost: 10.00,
      parkingFee: 3.00,
      organizerName: "Jane Smith",
      organizerEmail: "jane@email.com"
    },
    {
      id: "3",
      name: "Silver Lake Beach in Pinckney",
      description: "204 acres in size,the nearby state park beach has a concession stand and rest rooms with changing stalls.",
      date: "2024-07-31",
      time: "2:00 PM",
      duration: 3,
      street: "2 Crooked Lake Trail",
      city: "Pinckney",
      state: "MI",
      zip: "48169",
      cost: 10.00,
      parkingFee: 2.00,
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


