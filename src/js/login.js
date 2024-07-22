//initialization for login for main index.html (main view page) by event listener when submitted
import { handleLogin, handleSignup } from "./auth.mjs";

export function initLogin(){
  document.getElementById("loginForm").addEventListener("submit", handleLogin);
  document.getElementById("signupForm").addEventListener("submit", handleSignup);
}

