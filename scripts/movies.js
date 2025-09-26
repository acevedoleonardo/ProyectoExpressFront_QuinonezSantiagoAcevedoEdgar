// URL base para consumir la API backend
const API_BASE_URL = 'http://localhost:3000/api';

// Elementos DOM de filtros y listado
const categoryFilter = document.getElementById('categoryFilter');
const sortOrder = document.getElementById('sortOrder');
const movieList = document.getElementById('movieList');

// Función para obtener las películas según filtros seleccionados
async function fetchMovies() {
  const category = categoryFilter.value;
  const sort = sortOrder.value;

  // Construir query string filtrado y orden
  const query = new URLSearchParams();
  if (category) query.append('category', category);
  if (sort) query.append('sort', sort);

  try {
    const response = await fetch(`${API_BASE_URL}/movies?${query.toString()}`);
    if (!response.ok) throw new Error('Error al obtener películas');

    const movies = await response.json();
    renderMovies(movies);
  } catch (error) {
    movieList.innerHTML = `<li>Error cargando películas: ${error.message}</li>`;
  }
}

// Renderizar la lista de películas en el DOM
function renderMovies(movies) {
  movieList.innerHTML = ''; // Limpiar lista anterior
  movies.forEach(movie => {
    const li = document.createElement('li');
    li.textContent = `${movie.title} (${movie.year})`;
    li.addEventListener('click', () => {
      // Redirigir a detalle con id en query string
      window.location.href = `movie-detail.html?id=${movie._id}`;
    });
    movieList.appendChild(li);
  });
}

// Event listeners para actualizar listado cuando cambian filtros o orden
categoryFilter.addEventListener('change', fetchMovies);
sortOrder.addEventListener('change', fetchMovies);

// Cargar listado al cargar la página
fetchMovies();
