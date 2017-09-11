const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

mongoose.connect('mongodb://localhost/movies',  {useMongoClient: true});

const moviesSchema = new Schema({
  title : {type: String},
  genre : {type: String},
  plot  : { type: String}
});

const Movie = mongoose.model('Movie', moviesSchema);

module.exports = Movie;
