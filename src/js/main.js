//Main entry point for initializing the app
import { initActivityEntry } from "./activityEntry.js";
import { initCalendar } from "./calendar.js";
import { initDetailModal } from "./detailModal.js";
import { initLogin } from "./login.js"
import "./auth.js";
import "./weather.js";
import "./header.mjs";
import { redirect } from "express/lib/response.js";

//initialization functions
document.addEventListener("DOMContentLoaded", () => {
  initLogin();
  initActivityEntry();
  initCalendar();
  initDetailModal();

  console.log("main script loaded and initialized");
});

function initLogin() {
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener(submit, (e) => {
      e.preventDefault();
      const email = document.getElementById("userName").value;
      getElementById("password").value;
      login({ email, password }, redirect);
    });
  }
}


console.log("main script loaded and initialized");

