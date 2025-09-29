// aca se guarda el admin
const ADMIN_FLAG_KEY = 'sf:isAdmin';
(function guardAdmin() {
  const isAdmin = localStorage.getItem(ADMIN_FLAG_KEY) === '1';
  if (!isAdmin) window.location.href = 'admin-login.html';
})();

// utlidades de toast
const $ = sel => document.querySelector(sel);
const $$ = sel => document.querySelectorAll(sel);

function toast(msg, type = 'info') {
  const el = $('#toast');
  if (!el) return alert(msg);
  el.textContent = msg;
  el.className = `toast show ${type}`;
  setTimeout(() => { el.className = 'toast'; el.textContent = ''; }, 2500);
}
function confirmx(message) { return window.confirm(message); }

// usuarioss
const seedData = {
  users: [
    { _id: '1', username: 'admin', role: 'admin' },
    { _id: '2', username: 'user1', role: 'user' },
    { _id: '3', username: 'user2', role: 'user' },
  ],
  categories: [
    { _id: '1', name: 'anime' },
    { _id: '2', name: 'ciencia-ficcion' },
    { _id: '3', name: 'superheroes' },
  ],
  movies: [
    { _id: '1', title: 'Attack on Titan', year: 2013, category: 'anime', status: 'pending', image: '' },
    { _id: '2', title: 'Blade Runner 2049', year: 2017, category: 'ciencia-ficcion', status: 'pending', image: '' },
    { _id: '3', title: 'Spider-Man', year: 2002, category: 'superheroes', status: 'pending', image: '' },
    { _id: '4', title: 'Akira', year: 1988, category: 'anime', status: 'pending', image: '' },
    { _id: '5', title: 'Dune', year: 2021, category: 'ciencia-ficcion', status: 'pending', image: '' },
  ],
};
function ensureSeeds() {
  if (!localStorage.getItem('users')) localStorage.setItem('users', JSON.stringify(seedData.users));
  if (!localStorage.getItem('categories')) localStorage.setItem('categories', JSON.stringify(seedData.categories));
  if (!localStorage.getItem('movies')) localStorage.setItem('movies', JSON.stringify(seedData.movies));
}

// storager help
const store = {
  get(key) { try { return JSON.parse(localStorage.getItem(key)) || []; } catch { return []; } },
  set(key, data) { localStorage.setItem(key, JSON.stringify(data)); },
};

// logout de admin
const logoutBtn = $('#adminLogout');
if (logoutBtn) {
  logoutBtn.addEventListener('click', () => {
    localStorage.removeItem(ADMIN_FLAG_KEY);
    window.location.href = 'admin-login.html';
  });
}


/*  USUARIOS */
const userList = $('#userList');
const userEmpty = $('#userEmpty');

function loadUsers() {
  const users = store.get('users');
  if (!users.length) {
    userList.innerHTML = '';
    userEmpty.classList.remove('hide');
    return;
  }
  userEmpty.classList.add('hide');
  userList.innerHTML = users.map(u => `
    <div class="row item">
      <div>
        <strong>${u.username}</strong>
        <span class="badge ${u.role === 'admin' ? 'admin' : ''}">${u.role}</span>
      </div>
      <div class="actions">
        <button class="btn" data-role="${u._id}">Cambiar rol</button>
        <button class="btn danger" data-del="${u._id}">Eliminar</button>
      </div>
    </div>
  `).join('');

  userList.querySelectorAll('[data-del]').forEach(btn => {
    btn.addEventListener('click', () => deleteUser(btn.dataset.del));
  });
  userList.querySelectorAll('[data-role]').forEach(btn => {
    btn.addEventListener('click', () => toggleRole(btn.dataset.role));
  });
}
function deleteUser(userId) {
  if (!confirmx('¿Seguro que quieres eliminar este usuario?')) return;
  let users = store.get('users');
  users = users.filter(u => u._id !== userId);
  store.set('users', users);
  toast('Usuario eliminado', 'success');
  loadUsers();
}
function toggleRole(userId) {
  const users = store.get('users');
  const i = users.findIndex(u => u._id === userId);
  if (i === -1) return;
  users[i].role = users[i].role === 'admin' ? 'user' : 'admin';
  store.set('users', users);
  toast('Rol actualizado', 'success');
  loadUsers();
}
$('#seedUsers')?.addEventListener('click', () => {
  store.set('users', seedData.users);
  toast('Usuarios restaurados', 'success');
  loadUsers();
});

/*  categoriass */
const catForm = $('#catForm');
const categoryList = $('#categoryList');
const catEmpty = $('#catEmpty');
const catSearch = $('#catSearch');
const catPageInfo = $('#catPageInfo');

const catState = {
  page: 1,
  pageSize: 5,
  search: '',
};
function getFilteredCats() {
  const cats = store.get('categories');
  if (!catState.search.trim()) return cats;
  const q = catState.search.trim().toLowerCase();
  return cats.filter(c => c.name.toLowerCase().includes(q));
}
function renderCats() {
  const all = getFilteredCats();
  const totalPages = Math.max(1, Math.ceil(all.length / catState.pageSize));
  if (catState.page > totalPages) catState.page = totalPages;

  if (!all.length) {
    categoryList.innerHTML = '';
    catEmpty.classList.remove('hide');
    catPageInfo.textContent = '0 / 0';
    return;
  }
  catEmpty.classList.add('hide');

  const start = (catState.page - 1) * catState.pageSize;
  const pageItems = all.slice(start, start + catState.pageSize);

  categoryList.innerHTML = pageItems.map(c => `
    <div class="row item">
      <div><strong>${c.name}</strong></div>
      <div class="actions">
        <button class="btn" data-edit="${c._id}">Editar</button>
        <button class="btn danger" data-del="${c._id}">Eliminar</button>
      </div>
    </div>
  `).join('');

  categoryList.querySelectorAll('[data-edit]').forEach(btn => {
    btn.addEventListener('click', () => editCategory(btn.dataset.edit));
  });
  categoryList.querySelectorAll('[data-del]').forEach(btn => {
    btn.addEventListener('click', () => deleteCategory(btn.dataset.del));
  });

  catPageInfo.textContent = `${catState.page} / ${totalPages}`;
}
function addCategory(name) {
  name = (name || '').trim();
  if (!name) { toast('Nombre de categoría requerido', 'error'); return; }
  const cats = store.get('categories');
  if (cats.some(c => c.name.toLowerCase() === name.toLowerCase())) {
    toast('La categoría ya existe', 'error'); return;
  }
  const newCategory = { _id: Date.now().toString(), name };
  cats.push(newCategory);
  store.set('categories', cats);
  toast('Categoría creada', 'success');

  // reset a primera página y refresca
  catState.page = 1;
  renderCats();
}
function editCategory(id) {
  const cats = store.get('categories');
  const i = cats.findIndex(c => c._id === id);
  if (i === -1) return;
  const newName = prompt('Nuevo nombre de categoría:', cats[i].name);
  if (!newName) return;
  if (cats.some(c => c._id !== id && c.name.toLowerCase() === newName.toLowerCase())) {
    toast('Ya existe una categoría con ese nombre', 'error'); return;
  }
  cats[i].name = newName.trim();
  store.set('categories', cats);
  toast('Categoría actualizada', 'success');
  renderCats();
}
function deleteCategory(id) {
  if (!confirmx('¿Eliminar esta categoría?')) return;
  let cats = store.get('categories');
  cats = cats.filter(c => c._id !== id);
  store.set('categories', cats);
  toast('Categoría eliminada', 'success');
  renderCats();
}
catForm.addEventListener('submit', e => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(catForm));
  addCategory(data.name);
  catForm.reset();
});
catSearch.addEventListener('input', () => {
  catState.search = catSearch.value;
  catState.page = 1;
  renderCats();
});
$('#catPager [data-cat-prev]')?.addEventListener('click', () => {
  if (catState.page > 1) { catState.page--; renderCats(); }
});
$('#catPager [data-cat-next]')?.addEventListener('click', () => {
  const total = Math.max(1, Math.ceil(getFilteredCats().length / catState.pageSize));
  if (catState.page < total) { catState.page++; renderCats(); }
});

/* ------------------------------------------------------------------ */
/*  PELÍCULAS (búsqueda + paginación + aprobar/eliminar + EDIT MODAL)  */
/* ------------------------------------------------------------------ */
const movieList = $('#movieList');
const movieEmpty = $('#movieEmpty');
const movieSearch = $('#movieSearch');
const moviePageInfo = $('#moviePageInfo');

const movieState = {
  page: 1,
  pageSize: 6,
  search: '',
};

function getPendingMovies() {
  const movies = store.get('movies').filter(m => (m.status || 'pending') === 'pending');
  if (!movieState.search.trim()) return movies;
  const q = movieState.search.trim().toLowerCase();
  return movies.filter(m =>
    m.title.toLowerCase().includes(q) ||
    String(m.year||'').includes(q) ||
    (m.category||'').toLowerCase().includes(q)
  );
}

function renderMovies() {
  const all = getPendingMovies();
  const totalPages = Math.max(1, Math.ceil(all.length / movieState.pageSize));
  if (movieState.page > totalPages) movieState.page = totalPages;

  if (!all.length) {
    movieList.innerHTML = '';
    movieEmpty.classList.remove('hide');
    moviePageInfo.textContent = '0 / 0';
    return;
  }
  movieEmpty.classList.add('hide');

  const start = (movieState.page - 1) * movieState.pageSize;
  const pageItems = all.slice(start, start + movieState.pageSize);

  movieList.innerHTML = pageItems.map(m => renderMovieCard(m)).join('');

  movieList.querySelectorAll('[data-approve]').forEach(btn => {
    btn.addEventListener('click', () => approveMovie(btn.dataset.approve));
  });
  movieList.querySelectorAll('[data-del]').forEach(btn => {
    btn.addEventListener('click', () => deleteMovie(btn.dataset.del));
  });
  movieList.querySelectorAll('[data-edit]').forEach(btn => {
    btn.addEventListener('click', () => openMovieModal(btn.dataset.edit));
  });

  moviePageInfo.textContent = `${movieState.page} / ${totalPages}`;
}

function renderMovieCard(m) {
  const img = m.image || 'https://via.placeholder.com/600x340?text=Sin+Imagen';
  return `
    <article class="card">
      <div class="thumb" style="background-image:url('${img}')"></div>
      <div class="card-body">
        <h3>${m.title} <small>${m.year || ''}</small></h3>
        <div class="actions" style="display:flex; gap:.5rem;">
          <button class="btn success" data-approve="${m._id}">Aprobar</button>
          <button class="btn" data-edit="${m._id}">Editar</button>
          <button class="btn danger" data-del="${m._id}">Eliminar</button>
        </div>
      </div>
    </article>
  `;
}

function approveMovie(id) {
  const movies = store.get('movies');
  const i = movies.findIndex(m => m._id === id);
  if (i === -1) return;
  movies[i].status = 'approved';
  store.set('movies', movies);
  toast('Película aprobada', 'success');
  renderMovies();
}
function deleteMovie(id) {
  if (!confirmx('¿Eliminar esta película?')) return;
  let movies = store.get('movies');
  movies = movies.filter(m => m._id !== id);
  store.set('movies', movies);
  toast('Película eliminada', 'success');
  renderMovies();
}

movieSearch.addEventListener('input', () => {
  movieState.search = movieSearch.value;
  movieState.page = 1;
  renderMovies();
});
$('#moviePager [data-mov-prev]')?.addEventListener('click', () => {
  if (movieState.page > 1) { movieState.page--; renderMovies(); }
});
$('#moviePager [data-mov-next]')?.addEventListener('click', () => {
  const total = Math.max(1, Math.ceil(getPendingMovies().length / movieState.pageSize));
  if (movieState.page < total) { movieState.page++; renderMovies(); }
});

/* edicio peli  */
const modalBackdrop = $('#movieModalBackdrop');
const modalClose = $('#movieModalClose');
const modalCancel = $('#movieModalCancel');
const movieEditForm = $('#movieEditForm');
const movieCategorySelect = $('#movieCategorySelect');

function populateCategorySelect() {
  const cats = store.get('categories');
  movieCategorySelect.innerHTML = cats.map(c => `<option value="${c.name}">${c.name}</option>`).join('');
}

function openMovieModal(id) {
  const movies = store.get('movies');
  const m = movies.find(x => x._id === id);
  if (!m) return;

  // Rellena form
  movieEditForm.elements.id.value = m._id;
  movieEditForm.elements.title.value = m.title || '';
  movieEditForm.elements.year.value = m.year || '';
  populateCategorySelect();
  movieEditForm.elements.category.value = m.category || (store.get('categories')[0]?.name || '');
  movieEditForm.elements.image.value = m.image || '';

  modalBackdrop.classList.remove('hide');
}
function closeMovieModal() {
  modalBackdrop.classList.add('hide');
  movieEditForm.reset();
}

modalClose.addEventListener('click', closeMovieModal);
modalCancel.addEventListener('click', closeMovieModal);
modalBackdrop.addEventListener('click', (e) => {
  if (e.target === modalBackdrop) closeMovieModal();
});
document.addEventListener('keydown', (e)=>{
  if (e.key === 'Escape' && !modalBackdrop.classList.contains('hide')) closeMovieModal();
});

movieEditForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(movieEditForm));
  const { id, title, year, category, image } = data;

  if (!title.trim()) return toast('El título es obligatorio', 'error');
  const y = Number(year);
  if (!Number.isInteger(y) || y < 1900 || y > 2100) return toast('Año inválido', 'error');

  const movies = store.get('movies');
  const i = movies.findIndex(m => m._id === id);
  if (i === -1) return;

  movies[i].title = title.trim();
  movies[i].year = y;
  movies[i].category = category;
  movies[i].image = image?.trim() || '';

  store.set('movies', movies);
  toast('Película actualizada', 'success');
  closeMovieModal();
  renderMovies();
});

/* init */

$('#seedMovies')?.addEventListener('click', () => {
  store.set('movies', seedData.movies);
  toast('Películas restauradas', 'success');
  renderMovies();
});

ensureSeeds();
loadUsers();
renderCats();
renderMovies();
