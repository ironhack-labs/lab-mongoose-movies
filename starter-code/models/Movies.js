const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MoviesSchema = new Schema({
  title:String,
  genre:String,
  plot: String
})

module.exports = mongoose.model('Movies',MoviesSchema);