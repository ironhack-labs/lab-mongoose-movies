const mongoose = require('mongoose');
const { Schema } = mongoose;


const movieSchema = new Schema({
  title: { type: String, required: true, unique: true },
  genre: { type: String, required: true },
  plot: { type: String, required: true },
  pictureUrl: String,
});

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;