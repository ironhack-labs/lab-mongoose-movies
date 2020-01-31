const Celebrity = require("./models/celebrity.model");
const Movie = require("./models/movie.model");

function viewCelebrities() {
  return Celebrity.find();
}

function showCelebrity(id) {
  return Celebrity.findById(id);
}

function newCelebrity(name, occupation, catchPhrase) {
  return Celebrity.create({ name, occupation, catchPhrase });
}

function deleteCelebrity(id) {
  return Celebrity.findByIdAndDelete(id);
}

function updateCelebrity(id, data) {
  return Celebrity.findByIdAndUpdate(id, data);
}

function viewMovies() {
  return Movie.find();
}

function showMovie(id) {
  return Movie.findById(id);
}

function newMovie(title, genre, plot) {
  return Movie.create({ title, genre, plot });
}

function deleteMovie(id) {
  return Movie.findByIdAndDelete(id);
}

function updateMovie(id, data) {
  return Movie.findByIdAndUpdate(id, data);
}

module.exports = {
  viewCelebrities,
  showCelebrity,
  newCelebrity,
  deleteCelebrity,
  updateCelebrity,
  viewMovies,
  showMovie,
  newMovie,
  deleteMovie,
  updateMovie
};
