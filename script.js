 <script>
    const accessKeys = {
      "shadowX": "admin",
      "guest123": "guest",
      "X9f7L2qPz8VbT1mKc4YwR6dN3sJgQeAoZxUvHbEtMnWyCpLdGkRuSjXvTfBnMzQy": "developer"
    };

    function login() {
      const inputKey = document.getElementById("username").value.trim();
      const errorMsg = document.getElementById("errorMsg");
      const roleMsg = document.getElementById("roleMsg");

      errorMsg.textContent = "";
      roleMsg.textContent = "";

      if (accessKeys[inputKey]) {
        const role = accessKeys[inputKey];
        roleMsg.textContent = `✅ Access granted.`;
        
        // Optional redirect logic
        // window.location.href = `dashboard.html?role=${role}`;
      } else {
        errorMsg.textContent = "❌ Invalid access key.";
      }
    }
  </script>
