const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const MoviesSchema = new Schema({
  title       : { type: String, required: [true] },
  genre     : { type: String, required: [true] },
  plot   : { type: String, required: [true] },
});

const Movie = mongoose.model('Movies', MoviesSchema);
module.exports = Movie;
