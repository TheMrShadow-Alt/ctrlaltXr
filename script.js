<script>
  const accessKeys = {
    "shadowX": "admin",
    "guest123": "guest",
    "X9f7L2qPz8VbT1mKc4YwR6dN3sJgQeAoZxUvHbEtMnWyCpLdGkRuSjXvTfBnMzQy": "developer"
  };

  function login() {
    const inputKey = document.getElementById("username").value.trim();
    const errorMsg = document.getElementById("errorMsg");

    if (accessKeys[inputKey]) {
      const role = accessKeys[inputKey];
      errorMsg.textContent = "";
      alert(`Access granted.`);
    } else {
      errorMsg.textContent = "Invalid access key.";
    }
  }
</script>
