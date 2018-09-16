const mangoose = require('mangoose');
const Schema = mangoose.Schema;

const movieSchema = new Schema({
  title: {type: String, unique: true},
  genre: Array,
  plot: String
});

const Movie = mangoose.model("Movie", movieSchema);

module.exports = Movie;