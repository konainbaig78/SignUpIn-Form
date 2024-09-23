document.addEventListener("DOMContentLoaded", function () {
  let user = JSON.parse(localStorage.getItem("users")) || []; // Retrieve users from localStorage or initialize as empty array

  let reg = document.getElementById("register");
  if (reg) {
    reg.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent page refresh

      let name = document.getElementById("rName");
      let email = document.getElementById("rEmail");
      let pass = document.getElementById("rPass");

      let userData = {
        name: name.value,
        email: email.value,
        password: pass.value,
      };

      user.push(userData);

      name.value = "";
      email.value = "";
      pass.value = "";

      localStorage.setItem("users", JSON.stringify(user));

      window.location.href = "login.html";
    });
  }

  var loginBtn = document.getElementById("login");
  if (loginBtn) {
    loginBtn.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent page refresh
      var loginEmail = document.getElementById("loginEmail").value;
      var loginPass = document.getElementById("loginPass").value;

      let storedUsers = JSON.parse(localStorage.getItem("users")) || [];

      let foundUser = storedUsers.find(function (user) {
        return user.email === loginEmail && user.password === loginPass;
      });

      if (foundUser) {
        console.log("Login successful!");
        // Perform further actions after successful login
      } else {
        console.log("Login failed: Incorrect email or password.");
      }
    });
  }
});
