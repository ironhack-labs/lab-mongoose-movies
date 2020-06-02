const mongoose = require('mongoose');

const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');

const DB_TITLE = 'starter-code';

mongoose.connect(`mongodb://127.0.0.1:27017/${DB_TITLE}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});



// const addCelebrities = [
//     {
//         name: "Angelina Jolie",
//         occupation: "Actress",
//         catchPhrase: "Lorem Ipsum"
//     },
//     {
//         name: "Messi",
//         occupation: "Footballer",
//         catchPhrase: "Lorem Ipsum"
//     },
//     {
//         name: "Jason Momoa",
//         occupation: "Actor",
//         catchPhrase: "Lorem Ipsum"
//     },
// ];



//  Celebrity.insertMany(addCelebrities)
//   .then(newCelebrity => {
//     newCelebrity.forEach(celebrity => {
//       console.log("A new celebrity is created:", celebrity.name);
//     });
//   }).catch(err => console.log(`Error while creating a new celebrity: ${err}`));


const addMovies = [
  {
      title: "Harry Potter",
      genre: "Fantasy",
      plot: "Lorem Ipsum"
  },
  {
    title: "El Irlandés",
    genre: "Drama",
    plot: "Lorem Ipsum"
  },
  {
    title: "Pulp Fiction",
    genre: "Drama",
    plot: "Lorem Ipsum"
  }
];



Movie.insertMany(addMovies)
.then(newMovie => {
  newMovie.forEach(movie => {
    console.log("A new movie is created:", movie.title);
  });
}).catch(err => console.log(`Error while creating a new movie: ${err}`));