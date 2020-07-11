const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({

  name: {
    type: String,
  }, 

  genre: {
    type: String,
    default: 'unknown'
  }, 

  plot: {
    type: String
  }

});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;