const mongoose = require('mongoose');
const Movies = require('../models/movie.model');

const dbName = 'Celebrities';
mongoose.connect(`mongodb://localhost/${dbName}`);

// const celebrities = [
//   {
//     name: " Mark Hamill",
//     occupation: "Actor",
//     catchPhrase: "May the force be with you",
//   },
//   {
//     name: "James Dean",
//     occupation: "Actor",
//     catchPhrase: "Dreams as if you will live forever; Live as if you will die today",
//   },
//   {
//     name: "RuPaul",
//     occupation: "Superstar",
//     catchPhrase: "Sashay, away!",
//   },
// ]

// Celebrities
//   .create(celebrities)
//   .then(celebritiesBase => {
//     console.log(`Created ${celebritiesBase.length} celebrities`)
//     mongoose.connection.close();




const movies = [
  {
    title: " Star Wars",
    genre: "Sci-Fi",
    plot: "The adventures of a young Jedi",
  },
  {
    title: " Harry Potter",
    genre: "Child",
    plot: "A young wizard living a School of Wizardry",
  },
  {
    title: "Finding Nemo ",
    genre: "Animation",
    plot: "The journey of a fish looking for her child",
  },
]

Movies
  .create(movies)
  .then(moviesBase => {
    console.log(`Created ${moviesBase.length} movies`)
    mongoose.connection.close();
  })
  .catch(err => console.log('Hubo un error,', err))