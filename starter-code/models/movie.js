const { Schema, model } =  require('mongoose');

const movieSchema = new Schema ({
  title: { type: String },
  genre: { type: String },
  plot: { type: String }
})

const Movie = model('movie', movieSchema);

module.exports = Movie;