const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const MovieSchema = new Schema({
  title       : { type: String, required: [true, 'A donde vas sin titulo'] },
  genre      : String,
  plot   : String,

});

const Movie = mongoose.model('Movie', MovieSchema);
module.exports = Movie;
