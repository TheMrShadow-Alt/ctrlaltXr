// script.js

// Define valid access keys and optional roles
const accessKeys = {
  "shadowX": "admin",
  "guest123": "guest",
  "ctrlaltX2025": "developer"
};

// Login function
function login() {
  const inputKey = document.getElementById("username").value.trim();
  const errorMsg = document.getElementById("errorMsg");

  if (accessKeys[inputKey]) {
    const role = accessKeys[inputKey];
    errorMsg.textContent = "";

    // Optional: Display role badge or redirect
    alert(`Access granted. Role: ${role}`);
    window.location.href = `ctrlaltXr.html`;
  } else {
    errorMsg.textContent = "Invalid access key.";
  }
}
