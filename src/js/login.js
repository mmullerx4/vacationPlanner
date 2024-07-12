//initialization for login for main index.html (main view page) by event listener when submitted
import { handleLogin, handleSignup } from "./auth.mjs";

export function initLogin() { 
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");

  if (loginForm) {
    loginForm.addEventListener("submit", handleLogin);
  }

  if (signupForm) {
    signupForm.addEventListener("submit", handleSignup);
  }
}
