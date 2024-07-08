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


// export async function 
// login
// (credentials) {
//   const users = [
//     { email: "manager@example.com", password: "password", role: "accountManager"},
//     { email: "user@example.com", password: "password" role: "user"}
//   ];

//   const user = users.find(
//     user => user.email === credentials.email && user.password === credentials.password
//   );

//   if (user) {
//     return { success: true, user };
//   } else {
//     return { success: false };
//   }

// }
