const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity");
const Movie = require("../models/Movie");

const dbName = "moviesMongoose";
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
  {
    name: "Nicholas Cage",
    occupation: "Actor",
    catchPhrase:
      "I am not a demon, I am a lizar, a shark, a heat-sheeking panther.",
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Nicolas_Cage_-_66%C3%A8me_Festival_de_Venise_%28Mostra%29.jpg/200px-Nicolas_Cage_-_66%C3%A8me_Festival_de_Venise_%28Mostra%29.jpg"
  },
  {
    name: "Lionel Messi",
    occupation: "Football Player",
    catchPhrase:
      "You have to fight to reach your dream. You have to sacrifice and work hard for it.",
    img:
      "https://images.performgroup.com/di/library/Goal_Argentina/4e/34/lionel-messi-barcelona-fans-barcelona-psg-champions-league-09032017_1trj0q7qbplff1k6dwpdin9v0x.jpg?t=-1261141910"
  },
  {
    name: "Peter Griffin",
    occupation: "Family Guy",
    catchPhrase: `Love is like a fart. If you have to forece it, it's probably crap.`,
    img:
      "https://i.pinimg.com/originals/b8/64/a5/b864a5224eccc107594cf2f5a84b6af8.jpg"
  }
];

const movies = [
  {
    title: "The Godfather",
    genre: "Crime",
    plot:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    img:
      "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg"
  },
  {
    title: "The Dark Knight",
    genre: "Accion",
    plot:
      "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    img:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg"
  },
  {
    title: "The Lord of the Rings: The Return of the King",
    genre: "Adventure",
    plot: `Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.`,
    img:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg"
  }
];

// Celebrity.create(celebrities, err => {
//   if (err) {
//     throw err;
//   }
//   console.log(`Ceated ${celebrities.length} celebrities`);
//   mongoose.connection.close();
// });

Movie.create(movies, err => {
  if (err) {
    throw err;
  }
  console.log(`Ceated ${movies.length} movies`);
  mongoose.connection.close();
});

