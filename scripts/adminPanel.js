// Simulamos tokens para autorización (opcional)
function getToken() {
  return 'simulated-token';
}

// Contenedores DOM para mostrar y gestionar datos
const userList = document.getElementById('userList');
const categoryList = document.getElementById('categoryManagement');
const movieList = document.getElementById('movieManagement');

// Cargar datos iniciales en localStorage si no existen
if (!localStorage.getItem('users')) {
  localStorage.setItem(
    'users',
    JSON.stringify([
      { _id: '1', username: 'admin', role: 'admin' },
      { _id: '2', username: 'user1', role: 'user' },
    ]),
  );
}

if (!localStorage.getItem('categories')) {
  localStorage.setItem(
    'categories',
    JSON.stringify([
      { _id: '1', name: 'anime' },
      { _id: '2', name: 'ciencia-ficcion' },
      { _id: '3', name: 'superheroes' },
    ]),
  );
}

if (!localStorage.getItem('movies')) {
  localStorage.setItem(
    'movies',
    JSON.stringify([
      { _id: '1', title: 'Attack on Titan' },
      { _id: '2', title: 'Blade Runner 2049' },
    ]),
  );
}

// Función para mostrar usuarios
function loadUsers() {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  userList.innerHTML =
    '<ul>' +
    users
      .map(
        u => `
    <li>
      ${u.username} (${u.role})
      <button onclick="deleteUser('${u._id}')">Eliminar</button>
    </li>`,
      )
      .join('') +
    '</ul>';
}

// Función para eliminar usuario
function deleteUser(userId) {
  if (!confirm('¿Seguro que quieres eliminar este usuario?')) return;
  let users = JSON.parse(localStorage.getItem('users')) || [];
  users = users.filter(u => u._id !== userId);
  localStorage.setItem('users', JSON.stringify(users));
  loadUsers();
}

// Función para mostrar categorías y añadir botón
function loadCategories() {
  const categories = JSON.parse(localStorage.getItem('categories')) || [];
  categoryList.innerHTML =
    `<ul>${categories.map(c => `<li>${c.name}</li>`).join('')}</ul>
      <button id="addCategoryBtn">Agregar Categoría</button>`;
  document.getElementById('addCategoryBtn').addEventListener('click', addCategory);
}

// Función para añadir categoría
function addCategory() {
  const categoryName = prompt('Nombre nueva categoría');
  if (!categoryName) return;
  const categories = JSON.parse(localStorage.getItem('categories')) || [];
  const newCategory = { _id: Date.now().toString(), name: categoryName };
  categories.push(newCategory);
  localStorage.setItem('categories', JSON.stringify(categories));
  loadCategories();
}

// Func
