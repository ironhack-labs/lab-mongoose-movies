const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/celebrities');
const Movie = require('../models/movie');

const movies = [
  {
    name: 'The Godfather',
    genre: 'drama',
    plot: 'a godfather...'
  },
  {
    name: 'Pulp Fiction',
    genre: 'action',
    plot: 'two drug dealers...'
  },
  {
    name: 'The big lebowsky',
    genre: 'comedy',
    plot: 'a musician...'
  },
];

Movie.create(movies, (err, docs) => {
  if (err) {
    throw err;
  }

  docs.forEach((movie) => {
    console.log(movie.name)
  });
  mongoose.connection.close();
});