//Initialization for authentication
import { handleLogin } from "./auth.mjs";


document.getElementById("loginForm").addEventListener("submit", handleLogin);
