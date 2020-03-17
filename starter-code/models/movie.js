const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  title: {
    type: String,
    unique: true,
    required: true
  },
  genre: {
    type: String, 
    required: true
  },

  plot: {
    type: String, 
    unique: true,
    required: true
  }

});

const Movie = mongoose.model('Movie', MovieSchema);
module.exports = Movie;