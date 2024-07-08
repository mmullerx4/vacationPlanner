//write a function for handling the login logic that validates credentials
//from localStorage verifies credentials & allows signup for new user

const predefinedManagers = [
  { email: "manager1@example.com", password: "password", role: "accountManager" },
  { email: "manager2@example.com", password: "password", role: "accountManager" }
];

const users = JSON.parse(localStorage.getItem("users")) || predefinedManagers;

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
  const user = { ...credentials, role: "user" };
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
  return { success: true, user };
}

export async function handleLogin(event) {
  event.preventDefault(); // prevents the auto page reload
  const email = document.getElementById("userName").value;
  const password = document.getElementById("password").value;
  const response = await login({ email, password });

  if (response.success) {
    if (response.user.role === "accountManager") {
      window.location.href = "./activityEntry/index.html";
    } else {
      window.location.href = "./calendar/index.html";
    }
  } else {
    alert("Login failed, please try again");
  }
}

