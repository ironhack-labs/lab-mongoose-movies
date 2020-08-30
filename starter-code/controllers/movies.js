const Movie = require("../models/Movie");

exports.listAllmovies = async (req, res) => {
  const movies = await Movie.find();

  res.render("movies/index", { movies });
};

exports.getNewMovie = (req, res) => {
  res.render("movies/new");
};

exports.createNewMovie = async (req, res) => {
  await Movie.create(req.body);
  res.redirect("/movies");
};

exports.getEditMovie = async (req, res) => {
  const { id } = req.params;
  const movie = await Movie.findById(id);
  res.render("movies/edit", movie);
};

exports.showMovie = async (req, res) => {
  const { id } = req.params;
  const movie = await Movie.findById(id);
  res.render("movies/show", movie);
};

exports.editMovie = async (req, res) => {
  const { id } = req.params;
  await Movie.findByIdAndUpdate(id, req.body, { new: true });
  res.redirect("/movies");
};

exports.deleteMovie = async (req, res) => {
  const { id } = req.params;
  await Movie.findByIdAndDelete(id);
  res.redirect("/movies");
};
