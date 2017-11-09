const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const MovieSchema = new Schema({
  tittle: {type: String,required: true },
  genre: {type: String,required: true},
  plot   : { type: String,required: true}
});

const Movie = mongoose.model('Movie', MovieSchema);

module.exports = Movie;
