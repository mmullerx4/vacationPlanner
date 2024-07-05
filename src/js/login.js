//initialization for login
import { login } from "./auth.mjs";

export function initLogin() {
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("userName").value;
      const password = document.getElementById("password").value;
    })
  }
}
// document.addEventListener("click", (e) =>{
//     const email = qs("#email").value;
//     const password = qs("#password").value;
//     login({ email, password}, redirect);
// });
