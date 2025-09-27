document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const username = document.getElementById('loginUser').value.trim();
  const password = document.getElementById('loginPass').value;

  if (username === '' || password === '') {
    alert('Por favor, completa todos los campos.');
    return;
  }

  // aqui es donde se recuperan los usuarios guardados
  let users = JSON.parse(localStorage.getItem("users")) || [];

  // valida usuario y contraseña
  const validUser = users.find(u => u.username === username && u.password === password);

  if (validUser) {
    alert(`¡Bienvenido, ${username}!`);
    localStorage.setItem("currentUser", JSON.stringify(validUser)); 
    window.location.href = './html/home.html';
  } else {
    alert("Usuario o contraseña incorrectos.");
  }
});
