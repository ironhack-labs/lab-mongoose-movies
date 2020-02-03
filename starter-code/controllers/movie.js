const Movie = require("../models/Movie");

// R en CRUD
exports.getAllMovies = async (req, res) => {
  const movies = await Movie.find();
  res.render("movies", { movies });
};

exports.movieDetail = async (req, res) => {
  const movies = await Movie.findById(req.params.movieId);
  res.render("movie", { movies });
};
// C en CRUD
exports.createMovieView = (req, res) => {
  res.render("createMovie");
};
exports.createMovie = async (req, res) => {
  const { title,genre,plot } = req.body;
  await Movie.create({
    title,
    genre,
    plot
  });
  res.redirect("/");
};

// U en CRUD
exports.updateMovieView = async (req, res) => {
  const movies = await Movie.findById(req.params.movieId);
  res.render("updateMovie", movies);
};

exports.updateMovie = async (req, res) => {
  const {  title,genre,plot } = req.body;
  await Movie.findByIdAndUpdate(req.params.movieId, {  title,genre,plot });

  res.redirect("/");
};

// D en CRUD
exports.deleteMovie = async (req, res) => {
  await Movie.findByIdAndDelete(req.params.movieId);
  res.redirect("/");
};