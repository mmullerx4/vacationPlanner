//Main entry point for initializing the app
import { initActivityEntry } from "./activityEntry.js";
import { initCalendar } from "./calendar.js";
import { initDetailModal } from "./detailModal.js";
import { initLogin } from "./login.js";
import "./auth.js";
import "./weather.js";
import "./header.mjs";

//initialization functions
document.addEventListener("DOMContentLoaded", () => {
  initLogin();
  initActivityEntry();
  initCalendar();
  initDetailModal();

  console.log("main script loaded and initialized");
});
