// Guardar usuarios en localStorage de forma simple
const saveUser = (user) => {
  let users = JSON.parse(localStorage.getItem("users")) || [];
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
};

// Mostrar mensajes en div #message
const showMessage = (text, color = "yellow") => {
  const messageDiv = document.getElementById("message");
  messageDiv.style.color = color;
  messageDiv.textContent = text;
};

document.getElementById("registerForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("regUser").value.trim();
  const email = document.getElementById("regEmail").value.trim();
  const password = document.getElementById("regPass").value;

  if (!username || !email || !password) {
    showMessage("Por favor completa todos los campos.", "red");
    return;
  }

  // Validar duplicados por usuario o email
  let users = JSON.parse(localStorage.getItem("users")) || [];
  if (users.some(u => u.username === username)) {
    showMessage("El nombre de usuario ya está en uso.", "red");
    return;
  }
  if (users.some(u => u.email === email)) {
    showMessage("El correo ya está registrado.", "red");
    return;
  }

  if (password.length < 6) {
    showMessage("La contraseña debe tener al menos 6 caracteres.", "red");
    return;
  }

  // Guardar nuevo usuario
  const newUser = { username, email, password };
  saveUser(newUser);

  showMessage("Usuario registrado con éxito 🎉", "lightgreen");

  // Vaciar formulario
  e.target.reset();

  // Redirigir tras delay para dejar ver mensaje
  setTimeout(() => {
    window.location.href = "../index.html";
  }, 2000);
});
