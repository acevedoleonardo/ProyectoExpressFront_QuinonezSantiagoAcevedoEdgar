// register.js - Registro de usuarios con localStorage
const registerForm = document.getElementById("registerForm");

if (registerForm) {
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!name || !username || !email || !password) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    // verificar si existe
    const exists = users.find(u =>
      (u.username && u.username.toLowerCase() === username.toLowerCase()) ||
      (u.email && u.email.toLowerCase() === email.toLowerCase())
    );

    if (exists) {
      alert("El usuario o correo ya existe.");
      return;
    }

    // guardar nuevo usuario
    users.push({ name, username, email, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert(" Registro exitoso. Ahora puedes iniciar sesión.");
    registerForm.reset();

    // Redirigir al login
    window.location.href = "../index.html";
  });
}
