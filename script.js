<script>
  const accessKeys = {
    "shadowX": "admin",
    "guest123": "guest",
    "ctrlaltX2025": "developer"
  };

  function login() {
    const inputKey = document.getElementById("username").value.trim();
    const errorMsg = document.getElementById("errorMsg");

    if (accessKeys[inputKey]) {
      const role = accessKeys[inputKey];
      errorMsg.textContent = "";
      alert(`Access granted. Role: ${role}`);
    } else {
      errorMsg.textContent = "Invalid access key.";
    }
  }
</script>
