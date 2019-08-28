const Movie = require("../models/Movies");

const findMovies = async (req, res, next) => {
  try {
    const movies = await Movie.find();
    res.render("movies/index", { movies });
  } catch (error) {
    console.error(error);
    next();
  }
};

const newGetMovie = (req, res) => {
  res.render("movies/new");
};

const newPostMovie = (req, res) => {
  const newMovie = new Movie(req.body);
  newMovie
    .save()
    .then(() => {
      res.redirect("movies");
    })
    .catch(error => {
      res.render("movies/new");
      console.error(error);
    });
};

const findMovie = async (req, res, next) => {
  const { id } = req.params;
  try {
    const infoMovies = await Movie.findById(id);
    res.render("movies/show", infoMovies);
  } catch (error) {
    console.error(error);
    next();
  }
};

const deleteMovie = async (req, res) => {
  const { id } = req.params;
  try {
    await Movie.findByIdAndRemove(id);
    res.redirect("/movies");
  } catch (error) {
    console.error(error);
  }
};

const editMovie = async (req, res) => {
  const { id } = req.params;
  try {
    const movie = await movie.findById(id);
    res.render("movies/edit", movie);
  } catch (error) {
    console.error(error);
  }
};

const updateMovie = async (req, res) => {
  const { id } = req.params;
  const movie = req.body;
  try {
    await movie.findByIdAndUpdate(id, movie);
    res.redirect("/movies");
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  findMovies,
  newGetMovie,
  newPostMovie,
  findMovie,
  deleteMovie,
  editMovie,
  updateMovie
};
