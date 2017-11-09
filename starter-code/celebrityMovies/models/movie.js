const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const MovieSchema = new Schema({
  title : { type: String, required: [true, 'Insert title']},
  genre : { type: String, required: [true, 'Insert genre']},
  plot : { type: String, required: [true, 'Insert plot']},
});

const Movie = mongoose.model('Movie', MovieSchema);
module.exports = Movie;
