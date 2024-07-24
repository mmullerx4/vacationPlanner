# Activity Planner

Account Manager > login > Activity Entry view > Calendar view (view, edit, delete, get weather, view activity details)

Account User > login > Calendar view (activity details & weather)





This is an app that an account manager signs in and is taken the activity entry view. They enter a new activity and submit, going to the calendar view or clicks view calendar to go directly to the calendar view. 
The manager can edit or delete the activity on the calendar or view the details of the activity.
The manager has the option to edit details of activity on detail view.

(Ideally)The user will sign on and go directly to the calendar view. The user can click on a particular activity to view the details of the activity. They can highlight a day on the calendar and view the weather for that day.
Backup plan is to have user plug in city name and date for weather request.

A new "user" can create an account. Then go through same process as a user.


 When the account manager logins using login.js which should initiate auth.mjs it is determined that is a manager and has extra capabilities and is able to go to the activityEntry view and enter a new activity using activityEntry.js (initiates activityEntry.mjs). Upon submit of new activity uses calendar.js to initiate calendar.mjs to load in new activity or the manager can go directly to the calendar without adding a new activity. From the calendar view the manager view or edit activity and view the weather. FOR THE USER: The user logs in (login.js initiating auth.mjs) which takes them to the calendar view where they can view activity details (detailModal.js initiating detailModal.mjs) or view the weather (weather.js initiating weather.mjs).


Promise (an object that represents the eventual completion (or failure) of an async operation and its resulting value).
     "keep working and I will promise to get that back to you when completed."

f4f5709c3a974e43be4dab542cb448fa
