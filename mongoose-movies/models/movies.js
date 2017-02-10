const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const MovieSchema = new Schema({
  title : String,
  genre : String,
  plot  : String,
});

const Movies = mongoose.model('Movies', MovieSchema);
module.exports = Movies;
