const express = require("express");
const router = express.Router();

const Movie = require("../models/Movie");

/* GET movies page */
router.get("/", (req, res, next) => {
  Movie.find()
    .then((movieDB) => {
      // console.log("hola hola", celeb);
      res.render("movies/index", { movies: movieDB });
    })
    .catch((err) => {
      console.log("Error while searching index of movies", err);
      next();
    });
});

/* GET movies id */

router.get("/:id", (req, res, next) => {
  const movieId = req.params.id;
  Movie.findById({ _id: movieId })
    .then((movie) => {
      res.render("movies/show", { movieIndiv: movie });
    })
    .catch((err) => {
      console.log("Error while searching a individual movie", err);
      next();
    });
});

/* GET new movie page */
router.get("/new", (req, res, next) => {
  res.render("movies/new");
});

/* POST new movie page */

router.post("/", (req, res, next) => {
  const { title, genre, plot } = req.body;
  const newMovie = new Movie({ title, genre, plot });

  newMovie
    .save()
    .then((movie) => {
      res.redirect("/movies");
    })
    .catch((err) => {
      res.render("movies/new");
      console.log(`There was an error while creating a new movie`, err);
    });
});

/* POST delete movie page */

router.post("/:id/delete", (req, res, next) => {
  const movieId = req.params.id;
  Movie.findByIdAndRemove({ _id: movieId })
    .then((movie) => {
      res.redirect("/movies");
    })
    .catch((err) => {
      next();
      console.log("An error occurs while deleting a movie", err);
    });
});

/* GET edit movie*/

router.get("/:id/edit", (req, res, next) => {
  const movieId = req.params.id;
  Movie.findOne({ _id: movieId })
    .then((movie) => {
      res.render("movies/edit", movie);
    })
    .catch((err) => {
      next();
      console.log("Error while getting the page for editing a movie", err);
    });
});

/* POST edit movie */

router.post("/:id", (req, res, next) => {
  const movieId = req.params.id;
  const { title, genre, plot } = req.body;
  Movie.update(
    { _id: movieId },
    { $set: { title, genre, plot } },
    { new: true }
  )
    .then((movieUpd) => {
      res.redirect("/movies");
    })
    .catch((err) => {
      console.log("Error occurs while editing a movie", err);
      next();
    });
});

module.exports = router;