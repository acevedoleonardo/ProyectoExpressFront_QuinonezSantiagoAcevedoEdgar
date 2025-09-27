document.getElementById("registerForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const user = document.getElementById("newUser").value.trim();
  const password = document.getElementById("newPassword").value.trim();

  // validacion
  if (!name || !email || !user || !password) {
    alert("Por favor, completa todos los campos.");
    return;
  }

  //usuarios de localStore
  let users = JSON.parse(localStorage.getItem("users")) || [];

  // valida si ya existe el mismo usuario o correo
  const userExists = users.find(u => u.username === user || u.email === email);
  if (userExists) {
    alert("El usuario o correo ya existe. Intenta con otros.");
    return;
  }

  // guarda el usuario nuevo
  users.push({
    name: name,
    email: email,
    username: user,
    password: password
  });

  localStorage.setItem("users", JSON.stringify(users));

  alert("Registro exitoso, ahora puedes iniciar sesión.");
  document.getElementById("registerForm").reset();

  // Redirigir al login (index.html en tu caso)
  window.location.href = "../index.html"; 
});
