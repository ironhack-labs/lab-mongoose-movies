const mongoose = require('mongoose');
const Movie = require('../models/movie-model');

const dbtitle = 'celebrities';
mongoose.connect(`mongodb://localhost/${dbtitle}`, { useNewUrlParser: true });

const movies = [
  {
    title: "Terminator 2",
    genre: "Acción",
    rate: 9
  },
  {
    title: "IT",
    genre: "Terror",
    rate: 6
  },
  {
    title: "Ice Age",
    genre: "Animación",
    rate: 7
  }
]

Movie.create(movies, (err) => {
  if (err) { throw (err) }
  console.log(`Created ${movies.length} movies`)
  mongoose.connection.close();
});