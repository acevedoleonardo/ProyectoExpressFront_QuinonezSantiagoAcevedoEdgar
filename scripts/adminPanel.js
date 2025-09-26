const API_BASE_URL = 'http://localhost:3000/api';

// Contenedores DOM para mostrar y gestionar datos
const userList = document.getElementById('userList');
const categoryList = document.getElementById('categoryManagement');
const movieList = document.getElementById('movieManagement');

// Botones para agregar nuevos elementos
const addUserBtn = document.getElementById('addUserBtn');
const addCategoryBtn = document.getElementById('addCategoryBtn');
const addMovieBtn = document.getElementById('addMovieBtn');

// Función para obtener token JWT almacenado para autorización
function getToken() {
  return localStorage.getItem('token');
}

// Función para mostrar usuarios
async function loadUsers() {
  try {
    const res = await fetch(`${API_BASE_URL}/users`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
    if (!res.ok) throw new Error('No se pudieron cargar usuarios');
    const users = await res.json();

    // Renderizar lista de usuarios con opción para eliminar
    userList.innerHTML = '<ul>' + users.map(u => `
      <li>
        ${u.username} (${u.role})
        <button onclick="deleteUser('${u._id}')">Eliminar</button>
      </li>`).join('') + '</ul>';
  } catch (e) {
    userList.innerHTML = `<p>Error: ${e.message}</p>`;
  }
}

// Función para eliminar usuario
async function deleteUser(userId) {
  if (!confirm('¿Seguro que quieres eliminar este usuario?')) return;
  try {
    const res = await fetch(`${API_BASE_URL}/users/${userId}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${getToken()}` },
    });
    if (!res.ok) throw new Error('Error al eliminar usuario');
    loadUsers(); // recargar lista
  } catch (e) {
    alert(e.message);
  }
}

// Función para mostrar categorías y añadir botón
async function loadCategories() {
  try {
    const res = await fetch(`${API_BASE_URL}/categories`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
    if (!res.ok) throw new Error('No se pudieron cargar categorías');
    const categories = await res.json();
    // Mostrar categorías en div con botón para agregar
    categoryList.innerHTML = `
      <ul>${categories.map(c => `<li>${c.name}</li>`).join('')}</ul>
      <button id="addCategoryBtn">Agregar Categoría</button>
    `;
    document.getElementById('addCategoryBtn').addEventListener('click', addCategory);
  } catch (e) {
    categoryList.innerHTML = `<p>Error: ${e.message}</p>`;
  }
}

// Función para añadir categoría
async function addCategory() {
  const categoryName = prompt('Nombre nueva categoría');
  if (!categoryName) return;
  try {
    const res = await fetch(`${API_BASE_URL}/categories`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getToken()}`,
      },
      body: JSON.stringify({ name: categoryName }),
    });
    if (!res.ok) throw new Error('Error agregando categoría');
    loadCategories(); // actualizar lista
  } catch (e) {
    alert(e.message);
  }
}

// Función para mostrar películas y añadir botón
async function loadMovies() {
  try {
    const res = await fetch(`${API_BASE_URL}/movies`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
    if (!res.ok) throw new Error('No se pudieron cargar películas');
    const movies = await res.json();
    // Mostrar títulos con botones para eliminar
    movieList.innerHTML = `
      <ul>${movies.map(m => `
        <li>
          ${m.title}
          <button onclick="deleteMovie('${m._id}')">Eliminar</button>
        </li>`).join('')}
      </ul>
      <button id="addMovieBtn">Agregar Película</button>
    `;
    document.getElementById('addMovieBtn').addEventListener('click', addMovie);
  } catch (e) {
    movieList.innerHTML = `<p>Error: ${e.message}</p>`;
  }
}

// Función para eliminar película
async function deleteMovie(movieId) {
  if (!confirm('¿Seguro que quieres eliminar esta película?')) return;
  try {
    const res = await fetch(`${API_BASE_URL}/movies/${movieId}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${getToken()}` },
    });
    if (!res.ok) throw new Error('Error al eliminar película');
    loadMovies();
  } catch (e) {
    alert(e.message);
  }
}

// Función para agregar película (sólo título requerido para simplificar)
async function addMovie() {
  const title = prompt('Título de la nueva película');
  if (!title) return;
  try {
    const res = await fetch(`${API_BASE_URL}/movies`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getToken()}`,
      },
      body: JSON.stringify({ title }),
    });
    if (!res.ok) throw new Error('Error agregando película');
    loadMovies();
  } catch (e) {
    alert(e.message);
  }
}

// Inicialización: cargar datos cuando cargue la página
window.addEventListener('DOMContentLoaded', () => {
  loadUsers();
  loadCategories();
  loadMovies();
});
