//initialization for login for main index.html (main view page)
import { login } from "./auth.mjs";

export function initLogin() {
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault(); //prevents the auto page reload that happens with a form submission
      const email = document.getElementById("userName").value;
      const password = document.getElementById("password").value;
      const response = await login({ email, password }); //the login function (object) is called containing the arguments

      if (response.success) {
        if (response.user.role === 'accountManager') {
          window.location.href = "./activityEntry/index.html";
        }
      } else {
        alert("Login failed, please try again");
      }
    });
  }
}

initLogin();


