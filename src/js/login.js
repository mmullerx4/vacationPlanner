//initialization for login for main index.html (main view page)
import { handleLogin } from "./auth.mjs";

export function initLogin() { 
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", handleLogin);
  }
}
