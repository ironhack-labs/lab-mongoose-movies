const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
  name: String, 
  occupation: String,
  catchPhrase: String,
});

const Movie = mongoose.models('Movie', movieSchema);
module.exports = Movie;
