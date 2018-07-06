const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = Schema({
  title: { type: String, required: [true, 'Please enter the movie\'s title']},
  genre: { type: String, required: [true, 'Please enter the movie\'s genre']},
  year: { type: Number, required: [true, 'Please enter the movie\'s year']}
});

const Movie = mongoose.model('Movie', MovieSchema);

module.exports = Movie;
