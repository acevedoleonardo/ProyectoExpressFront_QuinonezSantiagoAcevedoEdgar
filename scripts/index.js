// Simulación de login local sin backend

document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const username = document.getElementById('loginUser').value.trim();
  const password = document.getElementById('loginPass').value;

  if (username === '' || password === '') {
    alert('Por favor, completa todos los campos.');
    return;
  }

  // Simulación exitosa de login
  alert(`¡Bienvenido, ${username}! (Simulación de login local)`);

  // Redirigir a home.html dentro de la carpeta html/
  window.location.href = './html/home.html';
});
