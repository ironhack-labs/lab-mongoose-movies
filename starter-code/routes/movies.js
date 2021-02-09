var express = require("express");
var router = express.Router();
const Movie = require("./../models/movie");

// GET     /movies
router.get("/", (req, res, next) => {
  Movie.find()
    .then((allMovies) => {
      const data = {
        allMovies: allMovies,
      };
      console.log("movies", data);
      res.render("movies/index", data);
    })
    .catch((err) => next(err));
});

// GET     /movies/:id
router.get("/:id/get", (req, res, next) => {
  const movieId = req.params.id;
  Movie.findById(movieId)
    .then((movie) => {
      console.log("movie data -->>>", movie);
      res.render("movies/show", movie);
    })
    .catch((err) => next(err));
});

// POST     /movies/:id/delete
router.post("/:id/delete", (req, res, next) => {
  const movieId = req.params.id;
  Movie.findByIdAndRemove(movieId)
    .then((movie) => {
      console.log("deleted!", movie);
      res.redirect("/movies");
    })
    .catch((err) => next(err));
});

// GET /movies/add
router.get("/add", (req, res, next) => {
  res.render("movies/add");
});

// POST     /movies/write
router.post("/write", (req, res, next) => {
  const data = req.body;
  console.log(data);
  Movie.create(data)
    .then((movie) => {
      console.log("added: ", movie);
      res.redirect("/movies");
    })
    .catch((err) => next(err));
});

// GET     /movies/edit/:id
router.get("/edit/:id", (req, res, next) => {
  const movieId = req.params.id;
  Movie.findById(movieId)
    .then((movie) => {
      console.log("movie data -->>>", movie);
      res.render("movies/edit", movie);
    })
    .catch((err) => next(err));
});

// POST /movies/update_write/:id
router.post("/update_write/:id", (req, res, next) => {
  const data = req.body;
  console.log(data);
  Movie.findOneAndUpdate({ _id: req.params.id }, data)
    .then((Movie) => {
      console.log("modified: ", Movie);
      res.redirect("/movies");
    })
    .catch((err) => next(err));
});

module.exports = router;
