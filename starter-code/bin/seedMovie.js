const mongoose = require('mongoose');
const Movie = require('../models/movie');

const dbName = 'lab-mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

const movies = [
  {
    title: 'Pulp Fiction',
    genre: 'Neo-noir',
    plot: 'Everyone dies'
  },
  {
    title: 'The Thing',
    genre: 'Horror',
    plot: 'Everyone dies (maybe)'
  },
  {
    title: 'The Departed',
    genre: 'Thriller',
    plot: 'Everyone dies (except Marky Mark)'
  }
]

Movie.create(movies, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${movies.length} movies`)
  mongoose.connection.close();
});
