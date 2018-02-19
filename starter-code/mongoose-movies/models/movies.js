// Require mongoose
const mongoose = require('mongoose');

// Require Schema
const Schema = mongoose.Schema

// Create Model
const movieSchema = new Schema ({
  name: {
    type: String,
    required: [true, "Please input name."]
  },
  genre: String,
  plot: String
});

const Movie = mongoose.model ('Movie, movieSchema');

// Export Module
module.exports = Movie;