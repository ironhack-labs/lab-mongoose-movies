const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const moviesShcema = new Schema ({
  title: {type: String},
  genre: {type: String},
  plot: {type: String},
},
{
  timestamps: true
}
);

const Movie = mongoose.model('movie',moviesShcema);

module.exports = Movie;