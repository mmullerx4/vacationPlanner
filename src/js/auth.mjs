//function for handling the login logic that validates credentials
//from localStorage verifies credentials & allows signup for new user

const predefinedManagers = [
  { email: "manager1@example.com", password: "password", role: "accountManager" },
  { email: "manager2@example.com", password: "password", role: "accountManager" }
];

let users = JSON.parse(localStorage.getItem("users")) || predefinedManagers;

export async function login(credentials) {
  const user = users.find(
    user => user.email === credentials.email && user.password === credentials.password
  );

  if (user) {
    return { success: true, user };
  } else {
    return { success: false };
  }
}

export async function signup(credentials) {
  const existingUser = users.find(user => user.email === credentials.email);
  if (existingUser) {
    return { success: false, message: "User already exists"};
  }
  const newUser = { ...credentials, role: "user" };
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
  return { success: true, user: newUser };
}

export async function handleLogin(event) {
  event.preventDefault(); // prevents the auto page reload
  const email = document.getElementById("userName").value;
  const password = document.getElementById("password").value;
  const response = await login({ email, password });

 function toggleManagerButtons() {
  const managerButtons = document.getElementsByClassName("managerButton");
  for (let i = 0; i , managerButtons.length; i++) {
    managerButtons[i].computedStyleMap.display = "block"; //list of all the CSS property values
  }
 }

  if (response.success) {
    if (response.user.role === "accountManager") {
      toggleManagerButtons();
      window.location.href = "./activityEntry/index.html";
      console.log("login successful as account manager & redirection done.");
    } else {
      window.location.href = "./calendar/index.html";
    }
  } else {
    alert("Login failed, please try again");
  }
}

export async function handleSignup(event) {
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;
  const response = await signup({ email, password});

  if (response.success) {
    alert("Signup successful! You can now log in.");
    window.location.href = "./login.html";
  } else {
    alert(response.message || "Signup failed, please try again");
  }
}


