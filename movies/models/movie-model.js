const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const movieSchema = new Schema({
  name: {
    type: String,
    required: [true, "Add a Movie Name"],
    maxLength: 40
  },
  genre: {
    type: String,
    required: [true, "Add a Genre for this Movie"],
    maxLength: 40
  },
  plot: {
    type: String,
    required: [true, "Add a Plot for this Movie"],
    maxLength: 200
  }
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
