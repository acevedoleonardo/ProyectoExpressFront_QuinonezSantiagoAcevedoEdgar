const moviesData = [
  // ANIME (12 títulos)
  {
    id: 1,
    title: "Attack on Titan",
    description:
      "La humanidad lucha por sobrevivir contra gigantes devoradores de humanos en un mundo post-apocalíptico.",
    category: "anime",
    year: 2013,
    rating: 9.0,
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Focioworld.wordpress.com%2F2019%2F03%2F03%2Fataque-a-los-titanes-attack-on-titan-serie-anime-critica-sin-spoilers-un-anime-epico-y-fabuloso%2F&psig=AOvVaw1dlR-_CEvkm7K6BzCVHzlP&ust=1758940158180000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCLjqle-w9Y8DFQAAAAAdAAAAABAE",
    popularity: 95,
    type: "serie",
  },
  {
    id: 6,
    title: "Demon Slayer",
    description: "Un joven se convierte en cazador de demonios para salvar a su hermana convertida en demonio.",
    category: "anime",
    year: 2019,
    rating: 8.7,
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.sensacine.com%2Fseries%2Fserie-25661%2F&psig=AOvVaw18ZmHUyG7wocQdR-wnR-Tc&ust=1758940211858000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCIDN0oWx9Y8DFQAAAAAdAAAAABAL",
    popularity: 89,
    type: "serie",
  },
  {
    id: 7,
    title: "One Piece",
    description: "Un joven pirata busca el tesoro más grande del mundo para convertirse en el Rey de los Piratas.",
    category: "anime",
    year: 1999,
    rating: 9.2,
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fonepiece.fandom.com%2Fes%2Fwiki%2FOne_Piece_Wiki&psig=AOvVaw1snQ49FrVNXfsNXXpPSJm_&ust=1758940269492000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCPiwm6Sx9Y8DFQAAAAAdAAAAABAE",
    popularity: 98,
    type: "serie",
  },
  {
    id: 8,
    title: "Naruto",
    description: "Un ninja adolescente busca reconocimiento y sueña con convertirse en Hokage de su aldea.",
    category: "anime",
    year: 2002,
    rating: 8.4,
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.imdb.com%2Fes%2Ftitle%2Ftt0988824%2F&psig=AOvVaw3R4ud1s382dEDiUDa0yVrJ&ust=1758940300911000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCLC5-bCx9Y8DFQAAAAAdAAAAABAE",
    popularity: 93,
    type: "serie",
  },
  {
    id: 9,
    title: "Death Note",
    description:
      "Un estudiante encuentra un cuaderno sobrenatural que puede matar a cualquier persona cuyo nombre escriba.",
    category: "anime",
    year: 2006,
    rating: 9.0,
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.imdb.com%2Fes%2Ftitle%2Ftt0877057%2F&psig=AOvVaw2bHrA59od72g8zj72HRqjA&ust=1758940328608000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCKDl0L6x9Y8DFQAAAAAdAAAAABAE",
    popularity: 91,
    type: "serie",
  },
  {
    id: 10,
    title: "My Hero Academia",
    description: "En un mundo donde casi todos tienen superpoderes, un chico sin poderes sueña con ser un héroe.",
    category: "anime",
    year: 2016,
    rating: 8.6,
    image: "https://static.wikia.nocookie.net/bokunoheroacademia/images/f/f1/Volumen_1_Panini.png/revision/latest?cb=20181110182259&path-prefix=es",
    popularity: 87,
    type: "serie",
  },
  {
    id: 11,
    title: "Spirited Away",
    description: "Una niña debe trabajar en un mundo espiritual para salvar a sus padres convertidos en cerdos.",
    category: "anime",
    year: 2001,
    rating: 9.3,
    image: "https://via.placeholder.com/250x300/81C784/FFFFFF?text=Spirited+Away",
    popularity: 96,
    type: "pelicula",
  },
  {
    id: 36,
    title: "Jujutsu Kaisen",
    description: "Un estudiante se une a una organización secreta para luchar contra maldiciones sobrenaturales.",
    category: "anime",
    year: 2020,
    rating: 8.8,
    image: "https://via.placeholder.com/250x300/9C27B0/FFFFFF?text=Jujutsu+Kaisen",
    popularity: 92,
    type: "serie",
  },
  {
    id: 37,
    title: "Your Name",
    description:
      "Dos adolescentes intercambian cuerpos misteriosamente y deben encontrarse antes de que sea demasiado tarde.",
    category: "anime",
    year: 2016,
    rating: 8.4,
    image: "https://via.placeholder.com/250x300/E91E63/FFFFFF?text=Your+Name",
    popularity: 88,
    type: "pelicula",
  },
  {
    id: 38,
    title: "Hunter x Hunter",
    description: "Un joven busca a su padre mientras se convierte en un cazador profesional.",
    category: "anime",
    year: 2011,
    rating: 9.1,
    image: "https://via.placeholder.com/250x300/4CAF50/FFFFFF?text=Hunter+x+Hunter",
    popularity: 90,
    type: "serie",
  },
  {
    id: 39,
    title: "Princess Mononoke",
    description: "Un joven príncipe se ve envuelto en una guerra entre los dioses del bosque y los humanos.",
    category: "anime",
    year: 1997,
    rating: 8.4,
    image: "https://via.placeholder.com/250x300/8BC34A/FFFFFF?text=Princess+Mononoke",
    popularity: 85,
    type: "pelicula",
  },
  {
    id: 40,
    title: "Mob Psycho 100",
    description:
      "Un estudiante con poderes psíquicos trata de vivir una vida normal mientras controla sus habilidades.",
    category: "anime",
    year: 2016,
    rating: 8.9,
    image: "https://via.placeholder.com/250x300/FF5722/FFFFFF?text=Mob+Psycho+100",
    popularity: 86,
    type: "serie",
  },

  // CIENCIA FICCIÓN (12 títulos)
  {
    id: 2,
    title: "Blade Runner 2049",
    description:
      "Un joven blade runner descubre un secreto que lo lleva a buscar a Rick Deckard, desaparecido hace 30 años.",
    category: "ciencia-ficcion",
    year: 2017,
    rating: 8.0,
    image: "https://via.placeholder.com/250x300/4ECDC4/FFFFFF?text=Blade+Runner+2049",
    popularity: 88,
    type: "pelicula",
  },
  {
    id: 12,
    title: "The Matrix",
    description:
      "Un programador descubre que la realidad es una simulación y se une a una rebelión contra las máquinas.",
    category: "ciencia-ficcion",
    year: 1999,
    rating: 8.7,
    image: "https://via.placeholder.com/250x300/2E7D32/FFFFFF?text=The+Matrix",
    popularity: 94,
    type: "pelicula",
  },
  {
    id: 13,
    title: "Interstellar",
    description: "Un grupo de exploradores viaja a través de un agujero de gusano para salvar a la humanidad.",
    category: "ciencia-ficcion",
    year: 2014,
    rating: 8.6,
    image: "https://via.placeholder.com/250x300/1565C0/FFFFFF?text=Interstellar",
    popularity: 92,
    type: "pelicula",
  },
  {
    id: 14,
    title: "Stranger Things",
    description:
      "Un grupo de niños descubre experimentos sobrenaturales y una dimensión alternativa llamada el Mundo del Revés.",
    category: "ciencia-ficcion",
    year: 2016,
    rating: 8.7,
    image: "https://via.placeholder.com/250x300/D32F2F/FFFFFF?text=Stranger+Things",
    popularity: 90,
    type: "serie",
  },
  {
    id: 15,
    title: "Dune",
    description: "Un joven noble debe proteger el recurso más valioso del universo en un planeta desértico peligroso.",
    category: "ciencia-ficcion",
    year: 2021,
    rating: 8.0,
    image: "https://via.placeholder.com/250x300/FF8F00/FFFFFF?text=Dune",
    popularity: 86,
    type: "pelicula",
  },
  {
    id: 16,
    title: "Black Mirror",
    description: "Una antología que explora los aspectos oscuros de la tecnología moderna y su impacto en la sociedad.",
    category: "ciencia-ficcion",
    year: 2011,
    rating: 8.8,
    image: "https://via.placeholder.com/250x300/37474F/FFFFFF?text=Black+Mirror",
    popularity: 89,
    type: "serie",
  },
  {
    id: 17,
    title: "Ex Machina",
    description:
      "Un programador participa en un experimento para evaluar las capacidades de una inteligencia artificial.",
    category: "ciencia-ficcion",
    year: 2014,
    rating: 7.7,
    image: "https://via.placeholder.com/250x300/607D8B/FFFFFF?text=Ex+Machina",
    popularity: 84,
    type: "pelicula",
  },
  {
    id: 41,
    title: "Westworld",
    description:
      "En un parque temático futurista, los androides desarrollan conciencia y se rebelan contra sus creadores.",
    category: "ciencia-ficcion",
    year: 2016,
    rating: 8.6,
    image: "https://via.placeholder.com/250x300/795548/FFFFFF?text=Westworld",
    popularity: 87,
    type: "serie",
  },
  {
    id: 42,
    title: "Arrival",
    description: "Una lingüista debe comunicarse con alienígenas para evitar una guerra global.",
    category: "ciencia-ficcion",
    year: 2016,
    rating: 7.9,
    image: "https://via.placeholder.com/250x300/9E9E9E/FFFFFF?text=Arrival",
    popularity: 83,
    type: "pelicula",
  },
  {
    id: 43,
    title: "The Expanse",
    description: "En el futuro, la humanidad ha colonizado el sistema solar y debe enfrentar una amenaza alienígena.",
    category: "ciencia-ficcion",
    year: 2015,
    rating: 8.5,
    image: "https://via.placeholder.com/250x300/3F51B5/FFFFFF?text=The+Expanse",
    popularity: 85,
    type: "serie",
  },
  {
    id: 44,
    title: "Gravity",
    description: "Dos astronautas luchan por sobrevivir después de que los desechos espaciales destruyen su estación.",
    category: "ciencia-ficcion",
    year: 2013,
    rating: 7.7,
    image: "https://via.placeholder.com/250x300/424242/FFFFFF?text=Gravity",
    popularity: 82,
    type: "pelicula",
  },
  {
    id: 45,
    title: "Altered Carbon",
    description: "En el futuro, la conciencia humana puede transferirse entre cuerpos, redefiniendo la muerte.",
    category: "ciencia-ficcion",
    year: 2018,
    rating: 8.0,
    image: "https://via.placeholder.com/250x300/E91E63/FFFFFF?text=Altered+Carbon",
    popularity: 81,
    type: "serie",
  },

  // SUPERHÉROES (12 títulos)
  {
    id: 3,
    title: "Spider-Man: No Way Home",
    description: "Peter Parker busca la ayuda del Doctor Strange para hacer que el mundo olvide que él es Spider-Man.",
    category: "superheroes",
    year: 2021,
    rating: 8.4,
    image: "https://via.placeholder.com/250x300/45B7D1/FFFFFF?text=Spider-Man",
    popularity: 92,
    type: "pelicula",
  },
  {
    id: 18,
    title: "Avengers: Endgame",
    description: "Los Vengadores restantes deben encontrar una manera de deshacer las acciones de Thanos.",
    category: "superheroes",
    year: 2019,
    rating: 8.4,
    image: "https://via.placeholder.com/250x300/1976D2/FFFFFF?text=Avengers+Endgame",
    popularity: 97,
    type: "pelicula",
  },
  {
    id: 19,
    title: "The Dark Knight",
    description:
      "Batman debe aceptar una de las pruebas psicológicas y físicas más grandes para luchar contra el Joker.",
    category: "superheroes",
    year: 2008,
    rating: 9.0,
    image: "https://via.placeholder.com/250x300/424242/FFFFFF?text=The+Dark+Knight",
    popularity: 95,
    type: "pelicula",
  },
  {
    id: 20,
    title: "The Boys",
    description: "Un grupo vigilante lucha contra superhéroes corruptos que abusan de sus superpoderes.",
    category: "superheroes",
    year: 2019,
    rating: 8.7,
    image: "https://via.placeholder.com/250x300/C62828/FFFFFF?text=The+Boys",
    popularity: 88,
    type: "serie",
  },
  {
    id: 21,
    title: "Wonder Woman",
    description: "Una guerrera amazona deja su isla paradisíaca para luchar en la Primera Guerra Mundial.",
    category: "superheroes",
    year: 2017,
    rating: 7.4,
    image: "https://via.placeholder.com/250x300/D4AF37/FFFFFF?text=Wonder+Woman",
    popularity: 85,
    type: "pelicula",
  },
  {
    id: 22,
    title: "Guardians of the Galaxy",
    description: "Un grupo de inadaptados intergalácticos debe unirse para salvar la galaxia.",
    category: "superheroes",
    year: 2014,
    rating: 8.0,
    image: "https://via.placeholder.com/250x300/7B1FA2/FFFFFF?text=Guardians",
    popularity: 87,
    type: "pelicula",
  },
  {
    id: 23,
    title: "Loki",
    description:
      "El Dios del Engaño debe ayudar a la Autoridad de Variación Temporal después de alterar la línea temporal.",
    category: "superheroes",
    year: 2021,
    rating: 8.2,
    image: "https://via.placeholder.com/250x300/388E3C/FFFFFF?text=Loki",
    popularity: 86,
    type: "serie",
  },
  {
    id: 46,
    title: "Black Panther",
    description: "T'Challa regresa a Wakanda para convertirse en rey, pero debe enfrentar a un desafiante del pasado.",
    category: "superheroes",
    year: 2018,
    rating: 7.3,
    image: "https://via.placeholder.com/250x300/9C27B0/FFFFFF?text=Black+Panther",
    popularity: 89,
    type: "pelicula",
  },
  {
    id: 47,
    title: "Daredevil",
    description: "Un abogado ciego lucha contra el crimen en Hell's Kitchen usando sus sentidos sobrehumanos.",
    category: "superheroes",
    year: 2015,
    rating: 8.6,
    image: "https://via.placeholder.com/250x300/D32F2F/FFFFFF?text=Daredevil",
    popularity: 84,
    type: "serie",
  },
  {
    id: 48,
    title: "Iron Man",
    description: "Un genio millonario construye una armadura tecnológica para convertirse en un superhéroe.",
    category: "superheroes",
    year: 2008,
    rating: 7.9,
    image: "https://via.placeholder.com/250x300/FF5722/FFFFFF?text=Iron+Man",
    popularity: 88,
    type: "pelicula",
  },
  {
    id: 49,
    title: "The Flash",
    description: "Barry Allen usa su supervelocidad para proteger Central City mientras busca al asesino de su madre.",
    category: "superheroes",
    year: 2014,
    rating: 7.7,
    image: "https://via.placeholder.com/250x300/FFC107/FFFFFF?text=The+Flash",
    popularity: 83,
    type: "serie",
  },
  {
    id: 50,
    title: "Captain America: The Winter Soldier",
    description: "Steve Rogers debe enfrentar a un misterioso asesino del pasado mientras descubre una conspiración.",
    category: "superheroes",
    year: 2014,
    rating: 7.7,
    image: "https://via.placeholder.com/250x300/2196F3/FFFFFF?text=Captain+America",
    popularity: 86,
    type: "pelicula",
  },

  // FANTASÍA (12 títulos)
  {
    id: 4,
    title: "El Señor de los Anillos",
    description: "Un hobbit emprende una épica aventura para destruir un anillo mágico y salvar la Tierra Media.",
    category: "fantasia",
    year: 2001,
    rating: 8.8,
    image: "https://via.placeholder.com/250x300/96CEB4/FFFFFF?text=LOTR",
    popularity: 90,
    type: "pelicula",
  },
  {
    id: 24,
    title: "Game of Thrones",
    description: "Varias familias nobles luchan por el control del Trono de Hierro en los Siete Reinos de Westeros.",
    category: "fantasia",
    year: 2011,
    rating: 9.3,
    image: "https://via.placeholder.com/250x300/8D6E63/FFFFFF?text=Game+of+Thrones",
    popularity: 96,
    type: "serie",
  },
  {
    id: 25,
    title: "Harry Potter",
    description: "Un joven mago descubre su herencia mágica y asiste a una escuela de magia y hechicería.",
    category: "fantasia",
    year: 2001,
    rating: 7.6,
    image: "https://via.placeholder.com/250x300/5D4037/FFFFFF?text=Harry+Potter",
    popularity: 93,
    type: "pelicula",
  },
  {
    id: 26,
    title: "The Witcher",
    description:
      "Un cazador de monstruos lucha por encontrar su lugar en un mundo donde las personas son más malvadas que las bestias.",
    category: "fantasia",
    year: 2019,
    rating: 8.2,
    image: "https://via.placeholder.com/250x300/6A1B9A/FFFFFF?text=The+Witcher",
    popularity: 87,
    type: "serie",
  },
  {
    id: 27,
    title: "Pan's Labyrinth",
    description: "Una niña escapa a un mundo de fantasía durante la España de la posguerra civil.",
    category: "fantasia",
    year: 2006,
    rating: 8.2,
    image: "https://via.placeholder.com/250x300/4E342E/FFFFFF?text=Pans+Labyrinth",
    popularity: 84,
    type: "pelicula",
  },
  {
    id: 28,
    title: "The Mandalorian",
    description: "Un cazarrecompensas mandaloriano navega por la galaxia lejos de la autoridad de la Nueva República.",
    category: "fantasia",
    year: 2019,
    rating: 8.8,
    image: "https://via.placeholder.com/250x300/795548/FFFFFF?text=Mandalorian",
    popularity: 89,
    type: "serie",
  },
  {
    id: 29,
    title: "The Shape of Water",
    description: "Una mujer muda se enamora de una criatura anfibia en un laboratorio gubernamental secreto.",
    category: "fantasia",
    year: 2017,
    rating: 7.3,
    image: "https://via.placeholder.com/250x300/00695C/FFFFFF?text=Shape+of+Water",
    popularity: 82,
    type: "pelicula",
  },
  {
    id: 51,
    title: "The Dragon Prince",
    description: "Dos príncipes humanos y una asesina élfica se embarcan en una misión épica para traer la paz.",
    category: "fantasia",
    year: 2018,
    rating: 8.3,
    image: "https://via.placeholder.com/250x300/9C27B0/FFFFFF?text=The+Dragon+Prince",
    popularity: 85,
    type: "serie",
  },
  {
    id: 52,
    title: "The Chronicles of Narnia",
    description: "Cuatro hermanos descubren un mundo mágico dentro de un armario y deben salvarlo del mal.",
    category: "fantasia",
    year: 2005,
    rating: 6.9,
    image: "https://via.placeholder.com/250x300/8BC34A/FFFFFF?text=Narnia",
    popularity: 81,
    type: "pelicula",
  },
  {
    id: 53,
    title: "Shadow and Bone",
    description: "Una joven descubre un poder extraordinario que podría ser la clave para liberar a su país.",
    category: "fantasia",
    year: 2021,
    rating: 7.6,
    image: "https://via.placeholder.com/250x300/424242/FFFFFF?text=Shadow+and+Bone",
    popularity: 83,
    type: "serie",
  },
  {
    id: 54,
    title: "The Hobbit",
    description:
      "Bilbo Bolsón se embarca en una aventura inesperada para ayudar a un grupo de enanos a reclamar su reino.",
    category: "fantasia",
    year: 2012,
    rating: 7.8,
    image: "https://via.placeholder.com/250x300/FF8F00/FFFFFF?text=The+Hobbit",
    popularity: 87,
    type: "pelicula",
  },
  {
    id: 55,
    title: "American Gods",
    description:
      "Un ex-convicto se ve envuelto en una guerra entre los antiguos dioses y los nuevos dioses de América.",
    category: "fantasia",
    year: 2017,
    rating: 7.7,
    image: "https://via.placeholder.com/250x300/795548/FFFFFF?text=American+Gods",
    popularity: 80,
    type: "serie",
  },

  // ACCIÓN (12 títulos)
  {
    id: 5,
    title: "John Wick",
    description: "Un ex-asesino a sueldo sale de su retiro para rastrear a los gángsters que mataron a su perro.",
    category: "accion",
    year: 2014,
    rating: 7.4,
    image: "https://via.placeholder.com/250x300/FFEAA7/000000?text=John+Wick",
    popularity: 85,
    type: "pelicula",
  },
  {
    id: 30,
    title: "Mad Max: Fury Road",
    description: "En un mundo post-apocalíptico, Max ayuda a un grupo de mujeres rebeldes a escapar de un tirano.",
    category: "accion",
    year: 2015,
    rating: 8.1,
    image: "https://via.placeholder.com/250x300/FF5722/FFFFFF?text=Mad+Max",
    popularity: 88,
    type: "pelicula",
  },
  {
    id: 31,
    title: "Mission: Impossible",
    description: "El agente Ethan Hunt debe completar misiones imposibles para salvar al mundo.",
    category: "accion",
    year: 1996,
    rating: 7.1,
    image: "https://via.placeholder.com/250x300/3F51B5/FFFFFF?text=Mission+Impossible",
    popularity: 86,
    type: "pelicula",
  },
  {
    id: 32,
    title: "The Raid",
    description: "Un equipo SWAT queda atrapado en un edificio controlado por un señor de la droga despiadado.",
    category: "accion",
    year: 2011,
    rating: 7.6,
    image: "https://via.placeholder.com/250x300/E91E63/FFFFFF?text=The+Raid",
    popularity: 83,
    type: "pelicula",
  },
  {
    id: 33,
    title: "Breaking Bad",
    description:
      "Un profesor de química se convierte en fabricante de metanfetaminas después de ser diagnosticado con cáncer.",
    category: "accion",
    year: 2008,
    rating: 9.5,
    image: "https://via.placeholder.com/250x300/689F38/FFFFFF?text=Breaking+Bad",
    popularity: 97,
    type: "serie",
  },
  {
    id: 34,
    title: "Fast & Furious",
    description: "Un grupo de corredores callejeros se involucra en carreras ilegales y atracos elaborados.",
    category: "accion",
    year: 2001,
    rating: 6.8,
    image: "https://via.placeholder.com/250x300/FF9800/FFFFFF?text=Fast+Furious",
    popularity: 89,
    type: "pelicula",
  },
  {
    id: 35,
    title: "Money Heist",
    description: "Un criminal mastermind planea el atraco perfecto a la Casa de Moneda de España.",
    category: "accion",
    year: 2017,
    rating: 8.3,
    image: "https://via.placeholder.com/250x300/D32F2F/FFFFFF?text=Money+Heist",
    popularity: 91,
    type: "serie",
  },
  {
    id: 56,
    title: "Die Hard",
    description: "Un policía debe salvar a su esposa y otros rehenes de terroristas en un rascacielos.",
    category: "accion",
    year: 1988,
    rating: 8.2,
    image: "https://via.placeholder.com/250x300/607D8B/FFFFFF?text=Die+Hard",
    popularity: 84,
    type: "pelicula",
  },
  {
    id: 57,
    title: "24",
    description: "El agente Jack Bauer tiene 24 horas para prevenir ataques terroristas contra Estados Unidos.",
    category: "accion",
    year: 2001,
    rating: 8.4,
    image: "https://via.placeholder.com/250x300/FF5722/FFFFFF?text=24",
    popularity: 87,
    type: "serie",
  },
  {
    id: 58,
    title: "Taken",
    description: "Un ex-agente de la CIA debe usar sus habilidades para rescatar a su hija secuestrada.",
    category: "accion",
    year: 2008,
    rating: 7.8,
    image: "https://via.placeholder.com/250x300/424242/FFFFFF?text=Taken",
    popularity: 82,
    type: "pelicula",
  },
  {
    id: 59,
    title: "Prison Break",
    description: "Un ingeniero se hace arrestar para ayudar a su hermano a escapar del corredor de la muerte.",
    category: "accion",
    year: 2005,
    rating: 8.3,
    image: "https://via.placeholder.com/250x300/2196F3/FFFFFF?text=Prison+Break",
    popularity: 89,
    type: "serie",
  },
  {
    id: 60,
    title: "The Bourne Identity",
    description:
      "Un hombre con amnesia descubre que tiene habilidades de combate extraordinarias y un pasado peligroso.",
    category: "accion",
    year: 2002,
    rating: 7.9,
    image: "https://via.placeholder.com/250x300/4CAF50/FFFFFF?text=The+Bourne+Identity",
    popularity: 85,
    type: "pelicula",
  },
]

// Variables globales
let currentMovies = [...moviesData]
let currentUser = null
let currentMovieId = null
const currentUserRating = 0
let showingMyList = false // Variable para controlar si se está mostrando Mi Lista

// Inicialización cuando se carga la página
document.addEventListener("DOMContentLoaded", () => {
  // Verificar si el usuario está logueado
  checkUserLogin()

  // Cargar películas iniciales
  displayMovies(currentMovies)

  // Configurar event listeners
  setupEventListeners()
})

// Verificar login del usuario
function checkUserLogin() {
  const loggedUser = localStorage.getItem("loggedUser")
  if (!loggedUser) {
    // Si no hay usuario logueado, redirigir al login
    window.location.href = "../index.html"
    return
  }

  currentUser = JSON.parse(loggedUser)
  document.getElementById("userWelcome").textContent = `Bienvenido, ${currentUser.username}`
}

// Configurar todos los event listeners incluyendo filtros de tipo
function setupEventListeners() {
  // Logout
  const logoutBtn = document.getElementById("logoutBtn")
  if (logoutBtn) {
    logoutBtn.addEventListener("click", handleLogout)
  }

  // Filtros
  const categoryFilter = document.getElementById("categoryFilter")
  const typeFilter = document.getElementById("typeFilter") // Obtener filtro de tipo
  const sortFilter = document.getElementById("sortFilter")

  categoryFilter.addEventListener("change", applyFilters)
  typeFilter.addEventListener("change", applyFilters) // Agregar listener para filtro de tipo
  sortFilter.addEventListener("change", applyFilters)

  // Modal
  const modal = document.getElementById("movieModal")
  const closeModal = document.getElementById("closeModal")

  closeModal.addEventListener("click", () => {
    modal.style.display = "none"
  })

  // Cerrar modal al hacer clic fuera
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none"
    }
  })
}

// Manejar logout
function handleLogout() {
  localStorage.removeItem("loggedUser")
  window.location.href = "../index.html"
}

function showAllContent() {
  showingMyList = false
  document.getElementById("categoryFilter").value = ""
  document.getElementById("typeFilter").value = ""
  applyFilters()
}

function filterByType(type) {
  showingMyList = false
  document.getElementById("typeFilter").value = type
  document.getElementById("categoryFilter").value = ""
  applyFilters()
}

function showMyList() {
  showingMyList = true
  const myListIds = getMyList() // Obtener solo los IDs de la lista
  const myListMovies = moviesData.filter((movie) => myListIds.includes(movie.id))
  displayMovies(myListMovies)
}

// Mostrar películas en el grid
function displayMovies(movies) {
  const moviesGrid = document.getElementById("moviesGrid")

  if (movies.length === 0) {
    const message = showingMyList
      ? '<p class="no-movies">Tu lista está vacía. ¡Agrega algunas películas y series!</p>'
      : '<p class="no-movies">No se encontraron películas con los filtros seleccionados.</p>'
    moviesGrid.innerHTML = message
    return
  }

  moviesGrid.innerHTML = movies
    .map(
      (movie) => `
        <div class="movie-card" onclick="openMovieModal(${movie.id})">
            <img src="${movie.image}" alt="${movie.title}" class="movie-image">
            <div class="movie-info">
                <h3 class="movie-title">${movie.title}</h3>
                <p class="movie-description">${movie.description}</p>
                <div class="movie-meta">
                    <span class="type-tag ${movie.type}">${movie.type === "pelicula" ? "🎬" : "📺"} ${movie.type.charAt(0).toUpperCase() + movie.type.slice(1)}</span>
                    <span class="category-tag">${getCategoryName(movie.category)}</span>
                    <span class="year-tag">${movie.year}</span>
                    <span class="rating-tag">★ ${movie.rating}</span>
                </div>
            </div>
        </div>
    `,
    )
    .join("")
}

// Obtener nombre de categoría legible
function getCategoryName(category) {
  const categories = {
    anime: "Anime",
    "ciencia-ficcion": "Ciencia Ficción",
    superheroes: "Superhéroes",
    fantasia: "Fantasía",
    accion: "Acción",
  }
  return categories[category] || category
}

function applyFilters() {
  if (showingMyList) return // No aplicar filtros si se está mostrando Mi Lista

  const categoryFilter = document.getElementById("categoryFilter").value
  const typeFilter = document.getElementById("typeFilter").value // Obtener valor del filtro de tipo
  const sortFilter = document.getElementById("sortFilter").value

  // Filtrar por categoría y tipo
  let filteredMovies = [...moviesData]

  if (categoryFilter) {
    filteredMovies = filteredMovies.filter((movie) => movie.category === categoryFilter)
  }

  if (typeFilter) {
    // Aplicar filtro por tipo
    filteredMovies = filteredMovies.filter((movie) => movie.type === typeFilter)
  }

  // Ordenar
  switch (sortFilter) {
    case "popularity":
      filteredMovies.sort((a, b) => b.popularity - a.popularity)
      break
    case "rating":
      filteredMovies.sort((a, b) => b.rating - a.rating)
      break
    case "year":
      filteredMovies.sort((a, b) => b.year - a.year)
      break
    case "title":
      filteredMovies.sort((a, b) => a.title.localeCompare(b.title))
      break
  }

  currentMovies = filteredMovies
  displayMovies(currentMovies)
}

// Abrir modal con detalles de película
function openMovieModal(movieId) {
  const movie = moviesData.find((m) => m.id === movieId)
  if (!movie) return

  currentMovieId = movieId

  // Llenar datos del modal
  document.getElementById("modalTitle").textContent = movie.title
  document.getElementById("modalDescription").textContent = movie.description
  document.getElementById("modalImage").src = movie.image
  document.getElementById("modalImage").alt = movie.title
  document.getElementById("modalCategory").textContent = getCategoryName(movie.category)
  document.getElementById("modalYear").textContent = movie.year
  document.getElementById("modalRating").textContent = `★ ${movie.rating}`

  updateMyListButton(movieId)

  loadMovieReviews(movieId)
  setupStarsInput()
  setupReviewForm()

  // Mostrar modal
  document.getElementById("movieModal").style.display = "block"
}

function getMyList() {
  // Retorna un array de IDs de películas/series en la lista del usuario
  return JSON.parse(localStorage.getItem(`myList_${currentUser.id}`)) || []
}

function saveMyList(myList) {
  localStorage.setItem(`myList_${currentUser.id}`, JSON.stringify(myList))
}

function toggleMyList(movieId) {
  const myList = getMyList()
  const index = myList.indexOf(movieId)

  if (index === -1) {
    // Agregar a la lista
    myList.push(movieId)
    alert("¡Agregado a tu lista!")
  } else {
    // Quitar de la lista
    myList.splice(index, 1)
    alert("Eliminado de tu lista")
  }

  saveMyList(myList)
  updateMyListButton(movieId) // Actualizar el estado del botón en el modal

  // Si estamos viendo Mi Lista, actualizar la vista
  if (showingMyList) {
    showMyList()
  }
}

function updateMyListButton(movieId) {
  const myList = getMyList()
  const isInList = myList.includes(movieId)
  const button = document.getElementById("addToListBtn") // Asumiendo que hay un botón con este ID en el modal
  const buttonText = document.getElementById("listBtnText") // Asumiendo que hay un span para el texto del botón

  if (isInList) {
    buttonText.textContent = "Quitar de Mi Lista"
    button.style.backgroundColor = "#e50914" // Color para indicar que está en la lista
  } else {
    buttonText.textContent = "Agregar a Mi Lista"
    button.style.backgroundColor = "#333333" // Color por defecto
  }
}

function loadMovieReviews(movieId) {
  const reviewsContainer = document.getElementById("reviewsList")
  const reviews = getMovieReviews(movieId)

  if (reviews.length === 0) {
    reviewsContainer.innerHTML = `
      <div class="no-reviews">
        <div class="no-reviews-icon">🎬</div>
        <h3>Sé el primero en dejar una reseña</h3>
        <p>Comparte tu opinión sobre esta ${moviesData.find((m) => m.id === movieId)?.type || "película"}</p>
      </div>
    `
    return
  }

  reviewsContainer.innerHTML = reviews
    .map(
      (review) => `
    <div class="review-item" data-review-id="${review.id}">
      <div class="review-header">
        <div class="review-user-info">
          <div class="review-avatar">${review.username.charAt(0).toUpperCase()}</div>
          <div>
            <div class="review-user">${review.username}</div>
            <div class="review-date">${formatDate(review.date)}</div>
          </div>
        </div>
        <div class="review-rating">
          ${generateStarsDisplay(review.rating)}
          <span class="rating-number">(${review.rating}/5)</span>
        </div>
      </div>
      <div class="review-content">
        <p class="review-comment">${review.comment}</p>
      </div>
      <div class="review-actions">
        <div class="review-votes">
          <button class="like-btn ${review.likes?.includes(currentUser.id) ? "active" : ""}" 
                  onclick="toggleReviewLike(${review.id}, ${movieId})">
            <span class="vote-icon">👍</span>
            <span class="vote-count">${review.likes?.length || 0}</span>
          </button>
          <button class="dislike-btn ${review.dislikes?.includes(currentUser.id) ? "active" : ""}" 
                  onclick="toggleReviewDislike(${review.id}, ${movieId})">
            <span class="vote-icon">👎</span>
            <span class="vote-count">${review.dislikes?.length || 0}</span>
          </button>
        </div>
        ${
          review.userId === currentUser.id
            ? `
          <button class="delete-review-btn" onclick="deleteReview(${review.id}, ${movieId})">
            <span class="delete-icon">🗑️</span>
            Eliminar
          </button>
        `
            : ""
        }
      </div>
    </div>
  `,
    )
    .join("")
}

function setupStarsInput() {
  const starsContainer = document.getElementById("starsRating")
  let selectedRating = 0

  starsContainer.innerHTML = ""
  for (let i = 1; i <= 5; i++) {
    const star = document.createElement("span")
    star.className = "star"
    star.textContent = "★"
    star.dataset.rating = i

    // Eventos para interactividad mejorada
    star.addEventListener("mouseenter", () => {
      highlightStars(i)
      star.style.transform = "scale(1.2)"
    })

    star.addEventListener("mouseleave", () => {
      highlightStars(selectedRating)
      star.style.transform = "scale(1.1)"
    })

    star.addEventListener("click", () => {
      selectedRating = i
      highlightStars(selectedRating)
      starsContainer.dataset.selectedRating = selectedRating

      // Efecto visual de confirmación
      star.style.transform = "scale(1.3)"
      setTimeout(() => {
        star.style.transform = "scale(1.1)"
      }, 150)
    })

    starsContainer.appendChild(star)
  }

  function highlightStars(rating) {
    const stars = starsContainer.querySelectorAll(".star")
    stars.forEach((star, index) => {
      if (index < rating) {
        star.classList.add("active")
      } else {
        star.classList.remove("active")
      }
    })
  }
}

function setupReviewForm() {
  const submitBtn = document.getElementById("submitReview")
  const reviewText = document.getElementById("reviewText")

  submitBtn.addEventListener("click", () => {
    const starsContainer = document.getElementById("starsRating")
    const rating = Number.parseInt(starsContainer.dataset.selectedRating) || 0
    const comment = reviewText.value.trim()

    // Validaciones mejoradas
    if (rating === 0) {
      alert("⭐ Por favor selecciona una calificación con estrellas")
      return
    }

    if (comment.length < 10) {
      alert("📝 La reseña debe tener al menos 10 caracteres")
      reviewText.focus()
      return
    }

    if (comment.length > 500) {
      alert("📝 La reseña no puede exceder 500 caracteres")
      reviewText.focus()
      return
    }

    // Verificar si el usuario ya tiene una reseña para esta película
    const existingReviews = getMovieReviews(currentMovieId)
    const userHasReview = existingReviews.some((review) => review.userId === currentUser.id)

    if (userHasReview) {
      if (!confirm("Ya tienes una reseña para este título. ¿Quieres reemplazarla?")) {
        return
      }
      // Eliminar reseña anterior
      const userReview = existingReviews.find((review) => review.userId === currentUser.id)
      deleteReview(userReview.id, currentMovieId, false) // false = no mostrar confirmación
    }

    // Crear nueva reseña
    const newReview = {
      id: Date.now(),
      movieId: currentMovieId,
      userId: currentUser.id,
      username: currentUser.username,
      rating: rating,
      comment: comment,
      date: new Date().toISOString(),
      likes: [],
      dislikes: [],
    }

    // Guardar reseña
    saveReview(newReview)

    // Limpiar formulario con animación
    reviewText.value = ""
    starsContainer.dataset.selectedRating = "0"
    const stars = starsContainer.querySelectorAll(".star")
    stars.forEach((star) => {
      star.classList.remove("active")
      star.style.transform = "scale(1)"
    })

    // Recargar reseñas
    loadMovieReviews(currentMovieId)

    // Mensaje de éxito mejorado
    alert("🎉 ¡Reseña agregada exitosamente!")
  })

  reviewText.addEventListener("input", () => {
    const charCount = reviewText.value.length
    const maxChars = 500

    // Cambiar color según la longitud
    if (charCount > maxChars) {
      reviewText.style.borderColor = "#e50914"
    } else if (charCount >= 10) {
      reviewText.style.borderColor = "#4caf50"
    } else {
      reviewText.style.borderColor = "#555555"
    }
  })
}

function getMovieReviews(movieId) {
  const allReviews = JSON.parse(localStorage.getItem("movieReviews")) || []
  return allReviews.filter((review) => review.movieId === movieId).sort((a, b) => new Date(b.date) - new Date(a.date))
}

function saveReview(review) {
  const allReviews = JSON.parse(localStorage.getItem("movieReviews")) || []
  allReviews.push(review)
  localStorage.setItem("movieReviews", JSON.stringify(allReviews))
}

function deleteReview(reviewId, movieId, showConfirm = true) {
  if (showConfirm && !confirm("¿Estás seguro de que quieres eliminar esta reseña?")) {
    return
  }

  const allReviews = JSON.parse(localStorage.getItem("movieReviews")) || []
  const updatedReviews = allReviews.filter((review) => review.id !== reviewId)
  localStorage.setItem("movieReviews", JSON.stringify(updatedReviews))
  loadMovieReviews(movieId)

  if (showConfirm) {
    alert("🗑️ Reseña eliminada")
  }
}

function toggleReviewLike(reviewId, movieId) {
  const allReviews = JSON.parse(localStorage.getItem("movieReviews")) || []
  const review = allReviews.find((r) => r.id === reviewId)

  if (!review) return

  if (!review.likes) review.likes = []
  if (!review.dislikes) review.dislikes = []

  const likeIndex = review.likes.indexOf(currentUser.id)
  const dislikeIndex = review.dislikes.indexOf(currentUser.id)

  // Remover dislike si existe
  if (dislikeIndex !== -1) {
    review.dislikes.splice(dislikeIndex, 1)
  }

  // Toggle like
  if (likeIndex === -1) {
    review.likes.push(currentUser.id)
  } else {
    review.likes.splice(likeIndex, 1)
  }

  localStorage.setItem("movieReviews", JSON.stringify(allReviews))
  loadMovieReviews(movieId)
}

function toggleReviewDislike(reviewId, movieId) {
  const allReviews = JSON.parse(localStorage.getItem("movieReviews")) || []
  const review = allReviews.find((r) => r.id === reviewId)

  if (!review) return

  if (!review.likes) review.likes = []
  if (!review.dislikes) review.dislikes = []

  const likeIndex = review.likes.indexOf(currentUser.id)
  const dislikeIndex = review.dislikes.indexOf(currentUser.id)

  // Remover like si existe
  if (likeIndex !== -1) {
    review.likes.splice(likeIndex, 1)
  }

  // Toggle dislike
  if (dislikeIndex === -1) {
    review.dislikes.push(currentUser.id)
  } else {
    review.dislikes.splice(dislikeIndex, 1)
  }

  localStorage.setItem("movieReviews", JSON.stringify(allReviews))
  loadMovieReviews(movieId)
}

function generateStarsDisplay(rating) {
  let stars = ""
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars += '<span class="star filled">★</span>'
    } else {
      stars += '<span class="star empty">☆</span>'
    }
  }
  return stars
}

function formatDate(dateString) {
  const date = new Date(dateString)
  return date.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}