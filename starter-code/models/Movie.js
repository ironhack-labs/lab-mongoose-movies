const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const celebritySchema = new Schema({
  title : String,
  genre : String,
  plot : String
  })
  const Movie = mongoose.model('Movie', celebritySchema);
  module.exports = Movie;