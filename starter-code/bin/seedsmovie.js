
const mongoose = require('mongoose');
const Movie = require('../models/movie');

const dbName = 'starter-code';
mongoose.connect(`mongodb://localhost/${dbName}`);



const movies = [
  {
    title : "Jaws",
    genre : "comedy",
    plot : "shars"
  },
  {
    title : "Titanic",
    genre : "drama",
    plot : "love and iceberg"
  },
  {
    title : "jurassic",
    genre : "action",
    plot : "animals"
  },

];

Movie.collection.drop();

Movie.create(movies, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${movies.length} movies`)
  mongoose.connection.close();
});