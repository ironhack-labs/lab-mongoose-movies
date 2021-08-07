const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity.model");
const Movie = require("../models/Movie.model");

router.get("/movies", (req, res, next) => {
  Movie.find().then((moives) => {
    res.render("movies/index", { movies: movies });
  });
});

router.get("/movies/:id", (req, res, next) => {
  Movie.findById(req.params.id)
    .populate("cast")
    .then((movie) => {
      res.render("movies/show", { movie: movie });
    });
});

router.get("/movies/new", (req, res, next) => {
  Celebrity.find()
    .then((celebrities) => {
      res.render("movies/new", { celebrities: celebrities });
    })
    .catch((err) => {
      console.log("Error occured while finding the movie", err);
    });
});

router.post("/movies", (req, res, next) => {
  const { name, genre, plot, cast } = req.body;
  Movie.create({ name, genre, plot, cast })
    .then(() => {
      Movie.save().then(res.render("/movies"));
    })
    .catch((err) => {
      console.log("Error occured while creating the movie", err);
      res.redirect("/movies/new");
    });
});

module.exports = router;
