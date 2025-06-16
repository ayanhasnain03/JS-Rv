// Simulates a registration process using a Promise
function register() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Register end"); // Executes after 1 second
      resolve();
    }, 1000);
  });
}

// Simulates sending an email using a Promise
function sendEmail() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Email End"); // Executes after 2 seconds
      resolve();
    }, 2000);
  });
}

// Simulates login using a Promise
function login() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("login end"); // Executes after 3 seconds
      resolve();
    }, 3000);
  });
}

// Simulates fetching user data using a Promise
function getUserData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Get user data"); // Executes after 2 seconds
      resolve();
    }, 2000);
  });
}

// Simulates displaying user data using a Promise
function displayUserData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("display user data"); // Executes after 1 second
      resolve();
    }, 1000);
  });
}

// Chaining the promises in sequence
register()
  .then(sendEmail)
  .then(login)
  .then(getUserData)
  .then(displayUserData)
  .catch((err) => {
    console.error("Error in process:", err);
  });

console.log("Others application work!"); // Runs immediately
