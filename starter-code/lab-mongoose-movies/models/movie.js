const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: {type: String, required: true},
  genre: {type: String, required: true},
  plot: {type: String, required: true},
  cast: [{type: Schema.Types.ObjectId, ref: 'Celebrity', required: true}],
  reviews: [{reviewer: String, content: String}]
});

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;