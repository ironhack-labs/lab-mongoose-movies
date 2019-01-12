const mongoose = require('mongoose');
const Movie = require('../models/Movie');

const dbName = 'celebrity';
mongoose.connect(`mongodb://localhost/${dbName}`);

const movie = [
  {
    title: "Peli 1",
    genre: "Terror",
    plot: "Plot 1"
  },
  {
    title: "Peli 2",
    genre: "Drama",
    plot: "Plot 2"
  },
  {
    title: "Peli 3",
    genre: "Terror",
    plot: "Plot 3"
  }
]

Movie.create(movie, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${movie.length} celebrities`)
  mongoose.connection.close()
});
