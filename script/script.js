// Guardar usuarios en localStorage
const saveUser = (user) => {
  let users = JSON.parse(localStorage.getItem("users")) || [];
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
};

// Registrar usuario
const registerForm = document.getElementById("registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const user = {
      username: document.getElementById("regUser").value,
      email: document.getElementById("regEmail").value,
      password: document.getElementById("regPass").value
    };
    saveUser(user);
    alert("Usuario registrado con éxito 🎉");
    window.location.href = "../index.html";
  });
}

// Login usuario
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("loginUser").value;
    const password = document.getElementById("loginPass").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const validUser = users.find(u => u.username === username && u.password === password);

    if (validUser) {
      localStorage.setItem("loggedUser", JSON.stringify(validUser));
      window.location.href = "./html/home.html";
    } else {
      alert("Usuario o contraseña incorrectos ❌");
    }
  });
}

// Logout
const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("loggedUser");
    window.location.href = "../index.html";
  });
}
