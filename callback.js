// Simulates a registration function with a callback
function register(callback) {
  setTimeout(() => {
    console.log("Register end"); // Executes after 1 second
    callback(); // Proceeds to the next step
  }, 1000);
}

// Simulates sending an email with a callback
function sendEmail(callback) {
  setTimeout(() => {
    console.log("Email End"); // Executes after 2 seconds
    callback(); // Proceeds to the next step
  }, 2000);
}

// Simulates login functionality with a callback
function login(cb) {
  setTimeout(() => {
    console.log("login end"); // Executes after 3 seconds
    cb(); // Proceeds to the next step
  }, 3000);
}

// Simulates fetching user data with a callback
function getUserData(cb) {
  setTimeout(() => {
    console.log("Get user data"); // Executes after 2 seconds
    cb(); // Proceeds to the next step
  }, 2000);
}

// Simulates displaying user data (final step, no callback needed)
function displayUserData() {
  setTimeout(() => {
    console.log("display user data"); // Executes after 1 second
  }, 1000);
}

// Starts the entire process with nested callbacks (callback hell)
register(function () {
  sendEmail(function () {
    login(function () {
      getUserData(function () {
        displayUserData();
      });
    });
  });
});

// This runs immediately without waiting for any of the async operations
console.log("Others application work!");
