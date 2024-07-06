//write a function for handling the login logic that validates credentials

export async function 
login
(credentials) {
  const users = [
    { email: "manager@example.com", password: "password", role: "accountManager"},
    { email: "user@example.com", password: "password" role: "user"}
  ];

  const user = users.find(
    user => user.email === credentials.email && user.password === credentials.password
  );

  if (user) {
    return { success: true, user };
  } else {
    return { success: false };
  }

}
