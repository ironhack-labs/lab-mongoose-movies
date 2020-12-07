const Movie = require("../models/Movies.model");

const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.render("movies/index", { movies });
  } catch (err) {
    next();
    return err;
  }
};

const getMovie = async (req, res) => {
  try {
    const { MovieId } = req.params;
    const movie = await Movie.findById(MovieId);
    console.log(movie)
    res.render("movies/show", { movie });
  } catch (err) {
    next();
    return err;
  }
};

const createMovie = async (req, res) => {
  try {
    await Movie.create(req.body);
    const movies = await Movie.find();
    res.render("movies/index", { movies });
  } catch (err) {
    next();
    return err;
  }
};

const deleteMovie = async (req, res) => {
  try {
    const { MovieId} = req.params;
    console.log(MovieId);
    const removedMovie = await Movie.findByIdAndRemove(MovieId);
    console.log("removed movie", removedMovie);
    res.redirect("/movies");
  } catch (err) {
    console.error(err);
  }
};

const updateMovie = async (req, res) => {
  try {
    const { MovieId } = req.params;
    const updatedMovie = await Movie.findByIdAndUpdate(MovieId, req.body, {
      new: true,
    });
    console.log("updeted movie", updatedMovie);
    res.redirect(`/movies/${MovieId}`);
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  getMovies,
  getMovie,
  createMovie,
  deleteMovie,
  updateMovie
};