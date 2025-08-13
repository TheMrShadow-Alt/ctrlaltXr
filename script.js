 const users = {
      "admin": "shadowX",
      "guest": "guest123"
    };

    function login() {
      const user = document.getElementById("username").value;
      const errorMsg = document.getElementById("errorMsg");

      if (users[user] && users[user]) {
        errorMsg.textContent = "";
        alert("Welcome, " + user + "!");
        // Redirect or load launcher UI here
      } else {
        errorMsg.textContent = "Invalid credentials. Try again.";
      }
    }
