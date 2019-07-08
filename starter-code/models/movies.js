const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  name: {type: String, minlength: 3},
  genre: {type: String, minlength: 5},
  plot: {type: String, minlength: 3, default: 'Unknown'},
  actor: {type: Schema.Types.ObjectId, ref: 'Actor'}
});

const Movies = mongoose.model('Movie', movieSchema);

module.exports = Movies;
