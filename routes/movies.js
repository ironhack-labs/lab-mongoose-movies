const express = require("express");
const router = express.Router();
const Movie = require("../models/movie.js");

//MOVIES PAGE
router.get("/", (req, res, next) => {
  Movie.find()
    .then(movies => {
      console.log("hello");
      res.render("movies/index", { movies });
    })
    .catch(error => {
      console.log(error);
      next();
    });
});

//MOVIE DETAIL PAGE

router.get("/:id", (req, res, next) => {
  let movieId = req.params.id;
  Movie.findOne({ _id: movieId })
    .then(movie => {
      console.log(movie);

      res.render("movies/show", { movie });
    })
    .catch(error => {
      console.log(error);
      next();
    });
});

// ADD MOVIE

router.get("/new", (req, res, next) => {
  res.render("movies/new");
});

router.post("/new", (req, res, next) => {
  const { title, genre, plot } = req.body;
  const newMovie = new Movie({ title, genre, plot });
  newMovie
    .save()
    .then(movie => {
      res.redirect("/movies/");
    })
    .catch(error => {
      console.log(error);
    });
});

//DELETE CELEBRITY
router.post("/:id/delete", (req, res, next) => {
  let movieId = req.params.id;
  Movie.findByIdAndRemove({ _id: movieId })
    .then(movie => {
      console.log(`movie deleted`);
    })
    .catch(error => {
      console.log(error);
      next();
    })
    .next(res.redirect("/movies/"));
});

//EDIT CELEBRITY
router.get("/:id/edit", (req, res, next) => {
  let movieId = req.params.id;
  Movie.findOne({ _id: movieId })
    .then(movie => {
      console.log(movie);

      res.render("movies/edit", { movie });
    })
    .catch(error => {
      console.log(error);
      next();
    });
});

router.post("/:id", (req, res, next) => {
  const { title, genre, plot } = req.body;
  Movie.update({ _id: req.params.id }, { $set: { title, genre, plot } })
    .then(movies => {
      res.redirect("/movies/");
    })
    .catch(error => {
      console.log(error);
    });
});

module.exports = router;
