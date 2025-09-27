const movieInfo = document.getElementById('movieInfo');
const reviewList = document.getElementById('reviewList');
const addReviewFormContainer = document.getElementById('addReviewForm');

// Obtener id película desde query string
const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get('id');

// Simulación datos locales en localStorage (una película con reseñas)
if (!localStorage.getItem('movies')) {
  localStorage.setItem('movies', JSON.stringify([
    {
      _id: '1',
      title: 'Attack on Titan',
      year: 2013,
      category: 'anime',
      description: 'Un mundo donde la humanidad lucha contra gigantes devoradores de humanos.',
      image: 'https://via.placeholder.com/600x300?text=Attack+on+Titan',
    }
  ]));
}

if (!localStorage.getItem('reviews')) {
  localStorage.setItem('reviews', JSON.stringify([
    {
      movieId: '1',
      title: 'Impresionante',
      comment: 'Una serie épica con mucha acción y drama.',
      rating: 9.5,
      user: 'usuario1',
      date: new Date().toISOString(),
    }
  ]));
}

if (!movieId) {
  movieInfo.textContent = 'No se especificó ninguna película.';
} else {
  const movies = JSON.parse(localStorage.getItem('movies')) || [];
  const reviews = JSON.parse(localStorage.getItem('reviews')) || [];

  const movie = movies.find(m => m._id === movieId);

  if (!movie) {
    movieInfo.textContent = 'Película no encontrada.';
  } else {
    renderMovieInfo(movie);
    renderReviewsForMovie(movieId);
    renderAddReviewForm();
  }
}

function renderMovieInfo(movie) {
  movieInfo.innerHTML = `
    <h2>${movie.title} (${movie.year})</h2>
    <p><strong>Categoría:</strong> ${movie.category}</p>
    <p>${movie.description}</p>
    ${movie.image ? `<img src="${movie.image}" alt="Imagen de ${movie.title}" style="max-width: 100%; border-radius: 8px;">` : ''}
  `;
}

function renderReviewsForMovie(movieId) {
  const allReviews = JSON.parse(localStorage.getItem('reviews')) || [];
  const movieReviews = allReviews.filter(r => r.movieId === movieId);
  reviewList.innerHTML = '';

  if (movieReviews.length === 0) {
    reviewList.innerHTML = '<li>No hay reseñas aún.</li>';
    return;
  }

  movieReviews.forEach(review => {
    const li = document.createElement('li');
    li.innerHTML = `
      <h4>${review.title} - ${review.rating}/10</h4>
      <p>${review.comment}</p>
      <small>Por ${review.user} el ${new Date(review.date).toLocaleDateString()}</small>
    `;
    reviewList.appendChild(li);
  });
}

function renderAddReviewForm() {
  addReviewFormContainer.innerHTML = `
    <h3>Agregar Reseña</h3>
    <form id="reviewForm">
      <input type="text" id="reviewTitle" placeholder="Título" required />
      <textarea id="reviewComment" placeholder="Comentario" required></textarea>
      <input type="number" id="reviewRating" min="1" max="10" step="0.1" placeholder="Calificación 1-10" required />
      <input type="text" id="reviewUser" placeholder="Tu nombre" required />
      <button type="submit">Enviar</button>
    </form>
  `;

  const reviewForm = document.getElementById('reviewForm');
  reviewForm.addEventListener('submit', e => {
    e.preventDefault();

    const newReview = {
      movieId,
      title: document.getElementById('reviewTitle').value,
      comment: document.getElementById('reviewComment').value,
      rating: parseFloat(document.getElementById('reviewRating').value),
      user: document.getElementById('reviewUser').value,
      date: new Date().toISOString(),
    };

    const allReviews = JSON.parse(localStorage.getItem('reviews')) || [];
    allReviews.push(newReview);
    localStorage.setItem('reviews', JSON.stringify(allReviews));
    renderReviewsForMovie(movieId);
    reviewForm.reset();
  });
}
