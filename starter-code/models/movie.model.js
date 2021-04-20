const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const movieSchema = new Schema({
  title: {type: String},
  genre: {type: String},
  plot: {type: String}

});

const Movie = mongoose.model ('Movie', movieSchema);

module.exports = Movie;