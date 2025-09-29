// index.js - Login usando localStorage
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const input = document.getElementById("loginUser").value.trim();
    const pass = document.getElementById("loginPass").value.trim();

    if (!input || !pass) {
      alert("Por favor completa todos los campos.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    // buscar por nombres
    const found = users.find(u =>
      (u.username && u.username.toLowerCase() === input.toLowerCase()) ||
      (u.email && u.email.toLowerCase() === input.toLowerCase())
    );

    if (!found) {
      alert("Usuario no encontrado.");
      return;
    }

    if (found.password !== pass) {
      alert("Contraseña incorrecta.");
      return;
    }

    // guardar
    localStorage.setItem("currentUser", JSON.stringify({
      username: found.username,
      name: found.name,
      email: found.email
    }));

    alert("Inicio de sesión exitoso");
    window.location.href = "./html/home.html";
  });
}
