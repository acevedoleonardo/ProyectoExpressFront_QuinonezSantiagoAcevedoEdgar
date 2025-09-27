document.getElementById("registerForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const user = document.getElementById("newUser").value;
  const password = document.getElementById("newPassword").value;

  if (!user || !password) {
    alert("Por favor, completa todos los campos.");
    return;
  }

  // antes de implementar el back se mira si ya existe el usuario en localStorage
  let users = JSON.parse(localStorage.getItem("users")) || [];

  const userExists = users.find(u => u.username === user);

  if (userExists) {
    alert("El usuario ya existe. Intenta con otro nombre.");
    return;
  }

  // se guarda el nuevo usuario
  users.push({ username: user, password: password });
  localStorage.setItem("users", JSON.stringify(users));

  alert("Registro exitoso, ahora puedes iniciar sesión.");
  window.location.href = "../index.html"; 
});
