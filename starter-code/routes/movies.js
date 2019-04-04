const express = require("express");
const router = express.Router();
const Movie = require("../models/movie");

/* GET movies page */
router.get("/movies", (req, res, next) => {
  Movie.find()
    .then(movies => {
      res.render("movies/index", { movies: movies });
    })
    .catch(error => {
      res.render("next", error);
      console.log("Error while retrieving movies details: ", error);
    });
});

/* GET profile page */
router.get("/movies/new", (req, res, next) => {
  Movie.findOne({ _id: req.params.id })
    .then(newMovie => {
      res.render("movies/new", { newMovie: newMovie });
    })
    .catch(error => {
      res.render("next", error);
      console.log("Error while retrieving movie details: ", error);
    });
});

/* GET profile page */
router.get("/movies/:id", (req, res, next) => {
  Movie.findOne({ _id: req.params.id })
    .then(movie => {
      res.render("movies/show", { movie: movie });
    })
    .catch(error => {
      res.render("next", error);
      console.log("Error while retrieving movie details: ", error);
    });
});

router.post("/movies", (req, res, next) => {
  const { title, genre, plot } = req.body;
  const newMovie = new Movie({ title, genre, plot });
  newMovie
    .save()
    .then(celebrities => {
      res.redirect("/movies");
    })
    .catch(error => {
      res.render("movies/", error);
      console.log("Error while creating movie: ", error);
    });
});

router.post("/movies/:id/delete", (req, res, next) => {
  Movie.findByIdAndRemove({ _id: req.params.id })
    .then(movies => {
      res.redirect("/movies");
    })
    .catch(error => {
      res.render("next", error);
      console.log("Error while deleting movie: ", error);
    });
});

router.get("/movies/:id/edit", (req, res, next) => {
  Movie.findOne({ _id: req.params.id })
    .then(movie => {
      res.render("movies/edit", { movie: movie });
    })
    .catch(error => {
      res.render("next", error);
      console.log("Error while deleting movie: ", error);
    });
});

router.post("/movies/:id", (req, res, next) => {
  Movie.updateOne({ _id: req.params.id }, { $set: req.body })
    .then(movie => {
      res.redirect("/movies");
    })
    .catch(error => {
      res.render("movies/", error);
      console.log("Error while updating movie: ", error);
    });
});

module.exports = router;
