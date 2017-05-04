const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: {
    type: String,
    required: [true, 'All movies have a title`.'],
    minlength: [1, ''],
    maxlength: [100, 'Maximum length for a title is 100.']
  },
  genre: {
    type: String,
    required: [true, 'All movies have an genre.'],
    minlength: [1, ''],
    maxlength: [100, 'Maximum length for genre is 100.']
  },
  plot: {
    type: String,
    required: [true, 'All movies have a plot.'],
    minlength: [1, ''],
    maxlength: [100, 'Maximum length for a plot is 100.']
  },
});

const Movie = mongoose.model('Movie', celebritySchema);
module.exports = Movie;
