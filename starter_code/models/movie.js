const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const MovieSchema = new Schema({
  title        : { type: String, required: [true, 'Please make sure to insert a movie title.'] },
  genre  : { type: String, required: [true, 'Please make sure to insert a genre.'] },
  plot : { type: String, required: [true, 'Please make sure to insert a plot.'] },
});

const Movie = mongoose.model('Movie', MovieSchema);
module.exports = Movie;
