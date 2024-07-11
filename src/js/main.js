//Main entry point for initializing the app
import { initActivityEntry } from "./activityEntry.mjs";
import { initCalendar } from "./calendar.mjs";
import { initDetailModal } from "./detailModal.mjs";
import { initLogin } from "./login.js";
import { handleLogin, handleSignup } from "./auth.mjs";
import "./weather.js";


//initialization functions
document.addEventListener("DOMContentLoaded", () => {
  initLogin();
  initActivityEntry();
  initCalendar();
  initDetailModal();
  handleLogin();
  handleSignup();


  console.log("main script loaded and initialized");
});
