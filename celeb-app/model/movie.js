const mongoose = require('mongoose'); //require mongoose in this file

const Schema = mongoose.Schema; // Schema constructor object

const movieSchema = new Schema ({
  title: String,
  genre: String,
  plot: String
});


// Product Schema gives us the power to require certain fields
//with certain data types
const Movie = mongoose.model('movie', movieSchema);

module.exports = Movie;
