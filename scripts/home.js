const movies = [
  // anime
  {
    id: 1,
    title: "Naruto Shippuden",
    category: "anime",
    type: "serie",
    year: 2007,
    rating: 4,
    description: "La historia de Naruto Uzumaki continúa mientras madura y busca convertirse en Hokage, enfrentando amenazas como la organización Akatsuki.",
    image: "https://i.imgur.com/VE9dK9Q.png"
  },
  {
    id: 2,
    title: "Your Name",
    category: "anime",
    type: "pelicula",
    year: 2016,
    rating: 5,
    description: "Dos adolescentes, Mitsuha y Taki, descubren que están conectados misteriosamente al intercambiar cuerpos, desatando una historia de amor a través del tiempo y el destino.",
    image: "https://i.imgur.com/WrJQy6q.png"
  },
  {
    id: 3,
    title: "Attack on Titan",
    category: "anime",
    type: "serie",
    year: 2013,
    rating: 5,
    description: "La humanidad lucha por sobrevivir contra gigantes devoradores de hombres en un mundo donde la libertad es un sueño imposible.",
    image: "https://i.imgur.com/Lg3lw5E.png"
  },
  {
    id: 4,
    title: "Dragon Ball Super: Broly",
    category: "anime",
    type: "pelicula",
    year: 2018,
    rating: 4,
    description: "Gokú y Vegeta enfrentan a Broly, un saiyajin legendario, en una batalla que pone a prueba los límites del poder.",
    image: "https://i.imgur.com/Mv72oU3.png"
  },
  {
    id: 5,
    title: "One Piece",
    category: "anime",
    type: "serie",
    year: 1999,
    rating: 5,
    description: "Monkey D. Luffy y su tripulación buscan el legendario tesoro One Piece para convertirlo en el Rey de los Piratas.",
    image: "https://i.imgur.com/IyADtDP.png"
  },

  // ciencia ficción
    {
    id: 6,
    title: "Interstellar",
    category: "ciencia-ficcion",
    type: "pelicula",
    year: 2014,
    rating: 5,
    description: "Un grupo de astronautas viaja a través de un agujero de gusano en busca de un nuevo hogar para la humanidad.",
    image: "https://i.imgur.com/w9H3mnh.png"
  },
  {
    id: 7,
    title: "Stranger Things",
    category: "ciencia-ficcion",
    type: "serie",
    year: 2016,
    rating: 5,
    description: "En un pequeño pueblo, un grupo de niños descubre un mundo paralelo conocido como 'El Otro Lado', lleno de peligros y criaturas desconocidas.",
    image: "https://i.imgur.com/B2K2FbS.png"
  },
  {
    id: 8,
    title: "Matrix",
    category: "ciencia-ficcion",
    type: "pelicula",
    year: 1999,
    rating: 5,
    description: "Neo descubre que la realidad en la que vive es una simulación controlada por máquinas, y se une a la resistencia.",
    image: "https://i.imgur.com/DYjHAtH.png"
  },
  {
    id: 9,
    title: "The Expanse",
    category: "ciencia-ficcion",
    type: "serie",
    year: 2015,
    rating: 4,
    description: "En un futuro donde la humanidad colonizó el sistema solar, tensiones políticas y misteriosas amenazas ponen en riesgo la paz.",
    image: "https://i.imgur.com/ZQdG4sQ.png"
  },
  {
    id: 10,
    title: "Star Wars: Una nueva esperanza",
    category: "ciencia-ficcion",
    type: "pelicula",
    year: 1977,
    rating: 5,
    description: "Luke Skywalker inicia su aventura para convertirse en Jedi y enfrentarse al Imperio Galáctico.",
    image: "https://i.imgur.com/du0z6fB.png"
  },

  // superheroes
  {
    id: 11,
    title: "Avengers: Endgame",
    category: "superheroes",
    type: "pelicula",
    year: 2019,
    rating: 5,
    description: "Los Vengadores se reúnen para revertir el daño causado por Thanos y restaurar el equilibrio del universo.",
    image: "https://i.imgur.com/3fwcHbY.png"
  },
  {
    id: 12,
    title: "The Dark Knight",
    category: "superheroes",
    type: "pelicula",
    year: 2008,
    rating: 5,
    description: "Batman enfrenta al Joker, un criminal caótico que amenaza con sumir a Gotham en la anarquía.",
    image: "https://i.imgur.com/UGwXrTd.png"
  },
  {
    id: 13,
    title: "Daredevil",
    category: "superheroes",
    type: "serie",
    year: 2015,
    rating: 4,
    description: "Matt Murdock, un abogado ciego con sentidos sobrehumanos, lucha contra el crimen en Hell’s Kitchen como Daredevil.",
    image: "https://i.imgur.com/Lbo7nV5.png"
  },
  {
    id: 14,
    title: "Spider-Man: No Way Home",
    category: "superheroes",
    type: "pelicula",
    year: 2021,
    rating: 4,
    description: "Peter Parker busca arreglar su vida tras ser desenmascarado, pero desencadena un caos multiversal.",
    image: "https://i.imgur.com/Hsz6E3W.png"
  },
  {
    id: 15,
    title: "Loki",
    category: "superheroes",
    type: "serie",
    year: 2021,
    rating: 4,
    description: "Después de los eventos de Endgame, Loki se enfrenta a la TVA y al multiverso.",
    image: "https://i.imgur.com/zsKpB07.png"
  },

  // Fantasia
  {
    id: 16,
    title: "El Señor de los Anillos",
    category: "fantasia",
    type: "pelicula",
    year: 2001,
    rating: 5,
    description: "Frodo Bolsón hereda el Anillo Único y debe emprender un peligroso viaje para destruirlo en Mordor.",
    image: "https://i.imgur.com/lFWt0G5.png"
  },
  {
    id: 17,
    title: "Harry Potter",
    category: "fantasia",
    type: "serie",
    year: 2001,
    rating: 5,
    description: "La historia de Harry Potter mientras asiste a Hogwarts y enfrenta a Voldemort.",
    image: "https://i.imgur.com/VgRx3jN.png"
  },
  {
    id: 18,
    title: "Narnia",
    category: "fantasia",
    type: "pelicula",
    year: 2005,
    rating: 4,
    description: "Los hermanos Pevensie descubren un mundo mágico lleno de criaturas fantásticas y profecías.",
    image: "https://i.imgur.com/NVQJ6yR.png"
  },
  {
    id: 19,
    title: "Shrek",
    category: "fantasia",
    type: "pelicula",
    year: 2001,
    rating: 5,
    description: "Un ogro que solo quiere paz se convierte en héroe inesperado en un mundo de cuentos de hadas.",
    image: "https://i.imgur.com/qnMMdMC.png"
  },
  {
    id: 20,
    title: "The Witcher",
    category: "fantasia",
    type: "serie",
    year: 2019,
    rating: 4,
    description: "Geralt de Rivia, un cazador de monstruos, navega un mundo lleno de magia, intrigas y destinos entrelazados.",
    image: "https://i.imgur.com/ghLkF8M.png"
  },

  // romance
  {
    id: 21,
    title: "Titanic",
    category: "romance",
    type: "pelicula",
    year: 1997,
    rating: 5,
    description: "Una historia de amor entre Jack y Rose florece en el trágico viaje del Titanic.",
    image: "https://i.imgur.com/64R8MIj.png"
  },
  {
    id: 22,
    title: "La La Land",
    category: "romance",
    type: "pelicula",
    year: 2016,
    rating: 4,
    description: "Un pianista de jazz y una aspirante a actriz se enamoran mientras persiguen sus sueños en Los Ángeles.",
    image: "https://i.imgur.com/d5Qe5gQ.png"
  },
  {
    id: 23,
    title: "Bridgerton",
    category: "romance",
    type: "serie",
    year: 2020,
    rating: 4,
    description: "Las familias nobles de Londres navegan romances, secretos y escándalos en la era de la Regencia.",
    image: "https://i.imgur.com/tCXhQQj.png"
  },
  {
    id: 24,
    title: "Orgullo y Prejuicio",
    category: "romance",
    type: "pelicula",
    year: 2005,
    rating: 5,
    description: "Elizabeth Bennet debe lidiar con las presiones sociales y sus sentimientos hacia Mr. Darcy.",
    image: "https://i.imgur.com/pbylqFf.png"
  },
  {
    id: 25,
    title: "Diario de una Pasión",
    category: "romance",
    type: "pelicula",
    year: 2004,
    rating: 5,
    description: "Una historia de amor apasionada que desafía las barreras sociales y el paso del tiempo.",
    image: "https://i.imgur.com/QFHK9fX.png"
  }
];

// para de renderizado
const moviesGrid = document.getElementById("moviesGrid");
let currentMovieId = null;

// Render inicial
function renderMovies(list) {
  moviesGrid.innerHTML = "";
  list.forEach(movie => {
    const card = document.createElement("div");
    card.classList.add("movie-card");
    card.innerHTML = `
      <img src="${movie.image}" alt="${movie.title}">
      <h3>${movie.title}</h3>
      <p>${movie.year} • ⭐ ${movie.rating}</p>
    `;
    card.onclick = () => openModal(movie);
    moviesGrid.appendChild(card);
  });
}

// modal
const modal = document.getElementById("movieModal");
const closeModalBtn = document.getElementById("closeModal");
const modalTitle = document.getElementById("modalTitle");
const modalImage = document.getElementById("modalImage");
const modalDescription = document.getElementById("modalDescription");
const modalCategory = document.getElementById("modalCategory");
const modalYear = document.getElementById("modalYear");
const modalRating = document.getElementById("modalRating");
const reviewsList = document.getElementById("reviewsList");
const reviewText = document.getElementById("reviewText");
const starsRating = document.getElementById("starsRating");
const submitReview = document.getElementById("submitReview");
const addToListBtn = document.getElementById("addToListBtn");
const listBtnText = document.getElementById("listBtnText");

function openModal(movie) {
  currentMovieId = movie.id;
  modal.style.display = "block";
  modalTitle.textContent = movie.title;
  modalImage.src = movie.image;
  modalDescription.textContent = movie.description;
  modalCategory.textContent = movie.category;
  modalYear.textContent = movie.year;
  modalRating.textContent = movie.rating;

  renderReviews();
  renderStars();
  updateListButton();
}

closeModalBtn.onclick = () => (modal.style.display = "none");

// reseñas
function renderReviews() {
  reviewsList.innerHTML = "";
  const reviews = JSON.parse(localStorage.getItem(`reviews_${currentMovieId}`)) || [];
  reviews.forEach(r => {
    const div = document.createElement("div");
    div.textContent = `⭐ ${r.stars} - ${r.text}`;
    reviewsList.appendChild(div);
  });
}

submitReview.onclick = () => {
  const stars = starsRating.dataset.selectedRating || 0;
  const text = reviewText.value.trim();
  if (text) {
    const reviews = JSON.parse(localStorage.getItem(`reviews_${currentMovieId}`)) || [];
    reviews.push({ stars, text });
    localStorage.setItem(`reviews_${currentMovieId}`, JSON.stringify(reviews));
    reviewText.value = "";
    renderReviews();
  }
};

// apartado de estrellitas
function renderStars() {
  starsRating.innerHTML = "";
  const selected = starsRating.dataset.selectedRating || 0;
  for (let i = 1; i <= 5; i++) {
    const star = document.createElement("span");
    star.textContent = "★";
    star.style.color = i <= selected ? "gold" : "#555";
    star.style.transition = "0.3s";
    star.style.cursor = "pointer";
    star.onmouseover = () => {
      Array.from(starsRating.children).forEach((s, idx) => {
        s.style.color = idx < i ? "gold" : "#555";
      });
    };
    star.onmouseout = () => renderStars();
    star.onclick = () => {
      starsRating.dataset.selectedRating = i;
      localStorage.setItem(`rating_${currentMovieId}`, i);
      renderStars();
    };
    starsRating.appendChild(star);
  }
}

// lista
function toggleMyList(id) {
  let myList = JSON.parse(localStorage.getItem("myList")) || [];
  if (myList.includes(id)) {
    myList = myList.filter(item => item !== id);
  } else {
    myList.push(id);
  }
  localStorage.setItem("myList", JSON.stringify(myList));
  updateListButton();
}

function updateListButton() {
  let myList = JSON.parse(localStorage.getItem("myList")) || [];
  if (myList.includes(currentMovieId)) {
    listBtnText.textContent = "Quitar de Mi Lista";
  } else {
    listBtnText.textContent = "Agregar a Mi Lista";
  }
}

// Render inicial
renderMovies(movies);
