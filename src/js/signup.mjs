import { signup } from "./auth.mjs";

export async function handleSignup(event) {
  event.preventDefault();
  const email = document.getElementById("userName").value;
  const password = document.getElementById("password").value;
  const response = await signup({ email, password });

  if (response.success) {
    alert("Signup was successful! Please log in");
    window.location.href = "./login.html";
  } else {
    alert("Signup failed, Please try again.");
  }
}
