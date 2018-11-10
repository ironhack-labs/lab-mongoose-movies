const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MovieSchema = Schema({
  title: String,
  plot: String,
  genre: String
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Movie = mongoose.model('Movie', MovieSchema);

module.exports = Movie;
