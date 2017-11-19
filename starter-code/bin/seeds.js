const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/celebrities', {useMongoClient: true});
const Celebrities = require('../models/celebrity');
const Movies = require('../models/movie');

// const dateCelebrities = [
//   {
//     name: 'Pepito Grillo',
//     occupation: 'vividor 1',
//     catchPhrase: 'catchPhrase',
//   },
//   {
//     name: 'Monolito',
//     occupation: 'vividor 2',
//     catchPhrase: 'catchPhrase',
//   },
//   {
//     name: 'Ruterillo',
//     occupation: 'vividor 3',
//     catchPhrase: 'catchPhrase',
//   }
// ];
const dateMovies = [
  {
    title: 'movie 1',
    genre: 'genre 1',
    plot: 'plot 1',
  },
  {
    title: 'movie 2',
    genre: 'genre 2',
    plot: 'plot 2',
  },
  {
    title: 'movie 3',
    genre: 'genre 3',
    plot: 'plot 3',
  }
];

Movies.collection.drop();

// Celebrities.create(dateCelebrities, (err, docs) => {
//   if (err) {
//     throw err;
//   }
//
//   docs.forEach((dateCelebrities) => {
//     console.log(dateCelebrities.name);
//   });

Movies.create(dateMovies, (err, docs) => {
  if (err) {
    throw err;
  }

  docs.forEach((dateMovies) => {
    console.log(dateMovies.title);
  });
  mongoose.connection.close();
});
