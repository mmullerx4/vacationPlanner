//initialization for login
import { login } from "./auth.mjs";


document.addEventListener("click", (e) =>{
    const email = qs("#email").value;
    const password = qs("#password").value;
    login({ email, password}, redirect);
});
