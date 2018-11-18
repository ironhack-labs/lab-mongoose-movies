const mongoose = require('mongoose');

const { Schema } = mongoose;

const MovieSchema = new Schema({
  title: { type: String, required: true, unique: true },
  genre: { type: String, required: true },
  plot: { type: String, required: true, unique: true },
});

const Movie = mongoose.model('Movie', MovieSchema);
module.exports = Movie;
