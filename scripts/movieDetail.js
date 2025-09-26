const API_BASE_URL = 'http://localhost:3000/api';

const movieInfo = document.getElementById('movieInfo');
const reviewList = document.getElementById('reviewList');
const addReviewFormContainer = document.getElementById('addReviewForm');

// Obtener id película desde query string
const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get('id');

if (!movieId) {
  movieInfo.textContent = 'No se especificó ninguna película.';
} else {
  // Función para obtener detalles y diseño
  async function fetchMovieDetail() {
    try {
      const res = await fetch(`${API_BASE_URL}/movies/${movieId}`);
      if (!res.ok) throw new Error('Error al cargar detalle');

      const movie = await res.json();
      renderMovieInfo(movie);
      fetchReviews();
    } catch (e) {
      movieInfo.textContent = e.message;
    }
  }

  // Mostrar detalles básicos
  function renderMovieInfo(movie) {
    movieInfo.innerHTML = `
      <h2>${movie.title} (${movie.year})</h2>
      <p><strong>Categoría:</strong> ${movie.category}</p>
      <p>${movie.description}</p>
      ${movie.image ? `<img src="${movie.image}" alt="Imagen de ${movie.title}" style="max-width:100%;">` : ''}
    `;
  }

  // Obtener y mostrar reseñas
  async function fetchReviews() {
    try {
      const res = await fetch(`${API_BASE_URL}/movies/${movieId}/reviews`);
      if (!res.ok) throw new Error('Error cargando reseñas');

      const reviews = await res.json();
      renderReviews(reviews);
      renderAddReviewForm();
    } catch (e) {
      reviewList.innerHTML = `<li>${e.message}</li>`;
    }
  }

  // Renderizar lista de reseñas
  function renderReviews(reviews) {
    reviewList.innerHTML = '';
    reviews.forEach(review => {
      const li = document.createElement('li');
      li.innerHTML = `
        <h4>${review.title} - ${review.rating}/10</h4>
        <p>${review.comment}</p>
        <small>Por ${review.user} el ${new Date(review.date).toLocaleDateString()}</small>
      `;
      reviewList.appendChild(li);
    });
  }

  // Formulario para agregar reseña
  function renderAddReviewForm() {
    addReviewFormContainer.innerHTML = `
      <h3>Agregar Reseña</h3>
      <form id="reviewForm">
        <input type="text" id="reviewTitle" placeholder="Título" required />
        <textarea id="reviewComment" placeholder="Comentario" required></textarea>
        <input type="number" id="reviewRating" min="1" max="10" step="0.1" placeholder="Calificación 1-10" required />
        <button type="submit">Enviar</button>
      </form>
    `;

    const reviewForm = document.getElementById('reviewForm');
    reviewForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      try {
        const newReview = {
          title: document.getElementById('reviewTitle').value,
          comment: document.getElementById('reviewComment').value,
          rating: parseFloat(document.getElementById('reviewRating').value),
        };

        // Consumir API para agregar reseña (se debe implementar backend)
        const token = localStorage.getItem('token'); // asumiendo JWT almacenado
        const res = await fetch(`${API_BASE_URL}/movies/${movieId}/reviews`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify(newReview)
        });

        if (!res.ok) throw new Error('Error enviando reseña');
        fetchReviews(); // recargar lista
      } catch (error) {
        alert(error.message);
      }
    });
  }

  // Cargar información al inicio
  fetchMovieDetail();
}
