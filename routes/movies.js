const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity.model");
const Movie = require("../models/Movie.model");

router.get("/moives", (req, res, next) => {
  Movie.find().then((moives) => {
    res.render("movies/index", { movies: movies });
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
  const { name, genre, celebrities } = req.body;
  Movie.create({ name, genre, celebrities })
    .then(() => {
      Movie.save().then(res.render("/movies"));
    })
    .catch((err) => {
      console.log("Error occured while creating the movie", err);
      res.redirect("/movies/new");
    });
});

module.exports = router;
